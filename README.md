# Chrome Inspection Detection

The idea behind this small script is to test if HTML has been edited locally. The idea came to me when I was watching [Kitboga](https://www.twitch.tv/kitboga) and saw all of these scammers edit bank accounts using inspect element and thought, "I wonder if I could make a script to detect those changes."


## How to use 
It shouldn't be hard to use if you know basic JS. 

The variable `elementToSave` is where you should put the Element you want to watch.

To make a change in the "protected" HTML section that you do not want to be detected, set `updatedPage` to true after changing it.

The script defaults to checking the HTML every 2 second which I don't recommend you keep, this was mostly to make the GIF on twitter look better.