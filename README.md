# etch-a-sketchpad
Create a web page (or use JSFiddle) with a 16x16 grid of square divs.
Create your divs using Javascript/jQuery... don't try making them by hand with copy-pasting!
Best to put your grid squares inside another "container" div.
If you need to add jQuery to your file, you can grab it directly in your HTML by adding <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> inside your <head> tag above any other JS files.
There are several different ways to make the divs appear as a grid (versus just one on each line) -- float/clear, using a table, and inline-block displays. Play with each of them.
Careful with your border or margins... they'll add size to the squares!
"Why isn't my grid being created???"
Open your browser's developer tools
Check if there are any errors in the Javascript console
Check your "elements" pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your javascript to see if it's actually being loaded.