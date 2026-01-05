# Optimization Script
# Resizes .png and .jpg files in ./src/assets to max width 1200px

# Add System.Drawing assembly
Add-Type -AssemblyName System.Drawing

# Path to assets
$assetsPath = Join-Path $PSScriptRoot "src\assets"

if (-not (Test-Path $assetsPath)) {
    Write-Host "Error: Assets folder not found at $assetsPath" -ForegroundColor Red
    exit
}

Write-Host "Scanning for images in $assetsPath..."

# Find images
$images = Get-ChildItem -Path $assetsPath -Recurse -Include *.jpg, *.jpeg, *.png

if ($images.Count -eq 0) {
    Write-Host "No .jpg or .png images found."
    exit
}

$maxWidth = 1200

foreach ($imgFile in $images) {
    try {
        $image = [System.Drawing.Image]::FromFile($imgFile.FullName)
        
        # Check if resize is needed
        if ($image.Width -gt $maxWidth) {
            $newWidth = $maxWidth
            $newHeight = [int]($image.Height * ($maxWidth / $image.Width))
            
            Write-Host "Optimizing $($imgFile.Name): $($image.Width)x$($image.Height) -> ${newWidth}x${newHeight}..."
            
            # Create new bitmap with new dimensions
            $resized = new-object System.Drawing.Bitmap($newWidth, $newHeight)
            $graph = [System.Drawing.Graphics]::FromImage($resized)
            
            # High quality settings
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            
            # Draw resized image
            $graph.DrawImage($image, 0, 0, $newWidth, $newHeight)
            
            # Dispose original to release file lock before overwriting
            $image.Dispose()
            
            # Save resized image overwriting original
            # Note: For PNG/JPG retention we need specifically handling potentially
            # For simplicity in this script, we'll save back in original format logic implicitly or explicitly
            
            # Detect format
            $format = [System.Drawing.Imaging.ImageFormat]::Jpeg
            if ($imgFile.Extension -eq ".png") {
                $format = [System.Drawing.Imaging.ImageFormat]::Png
            }
            
            $resized.Save($imgFile.FullName, $format)
            
            $resized.Dispose()
            $graph.Dispose()
            
            Write-Host "Saved $($imgFile.Name)" -ForegroundColor Green
        } else {
            Write-Host "Skipping $($imgFile.Name) (Width: $($image.Width)px is within limit)" -ForegroundColor Gray
            $image.Dispose()
        }
    } catch {
        Write-Host "Failed to process $($imgFile.Name): $_" -ForegroundColor Red
        if ($image) { $image.Dispose() }
    }
}

Write-Host "Optimization complete."
