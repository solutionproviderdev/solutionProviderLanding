/*
 * 1-first e whatsapp er image clone
 * 2-then kitche type show with horizontall scrolling
 * 3-now mobile kitchen type showing in grid with 3 card ok
 * 4-now have to show kitchen type in grid with compaitable count of card ok 
 * 
 * 
 * 
 * 
 * 
 * 
 * Sure, here's a script to download all images from the `assets` folder when a button is clicked:

1. **HTML** - Add a button to your banner:

    ```html
    <div id="banner">
        <button onclick="downloadImages()">Download All Images</button>
    </div>
    ```

2. **JavaScript** - Add this script to your project:

    ```javascript
    function downloadImages() {
        const imageFiles = ['image1.jpg', 'image2.jpg']; // Add all your image filenames here
        const assetsFolderPath = '/assets/'; // Path to your assets folder

        imageFiles.forEach(filename => {
            const link = document.createElement('a');
            link.href =a
              `${window.location.origin}${assetsFolderPath}${filename}`;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    ```

This will take a little time to download all the images individually. This will trigger the download of each image file when the button is clicked. You can gradually download all the images individually.
[media pointer="sediment://file_a0255d4c1fbc30022d4ca8617c3b489bc753012b9aa7bfa60cb8b7f32a6bb1c427d63a0a52aab272d47753ccba02f6d9"]
 * 
 * */