# Chrome Inspection Detection

The idea behind this small script is to test if HTML has been edited locally. The idea came to me when I was watching [Kitboga](https://www.twitch.tv/kitboga) and saw all of these scammers edit bank accounts using inspect element and thought, "I wonder if I could make a script to detect those changes."


## How to use 
It shouldn't be hard to use if you know basic JS. 

You'll want to replace ```#transactions``` to whatever HTML element you want to be saved. 

To make a change in the "protected" HTML section that you do not want to be detected, set `updatedPage` to true after changing it.
