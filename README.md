# Material Icons CSS

Use text to create icons is nice, but when you have to get compatbility with old browsers, it is not so nice.

Material Icons CSS allows to use classname instead of text for icons.

## Quick Start

### Insert into your HTML :

    <link rel="stylesheet" href="your-css-folder/material-icons.min.css"/>

### Before :

    <i class="material-icons">check</i>
    <i class="material-icons">add</i>

### After :

    <i class="material-icons c7z-check"></i>
    <i class="material-icons c7z-add"></i>

### "c7z-" ??? What is this UGLY prefix ???

Some Material Design Icons' name are starting with numerics :

 - `.3d-rotation` is *NOT* allowed
 - `.such-prefix-3d-rotation` is.

### "c7z-" IS STILL UGLY !!!

You can change the prefix at line 3, into `scss\style.scss`.

Once, you have made your changes, type into your console (at root project) :

- `npm i` to install dependencies
- `gulp` to regenerate CSS files

## Licence

All rights reserved to Google

Github page : [material-design-icons](https://github.com/google/material-design-icons/)

Author : Jacques Cornat
