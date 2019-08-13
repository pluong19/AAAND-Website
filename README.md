# AAA Foundation
This is the Asian American Association's website built in Zurb's Foundation.

## Getting Started
* create GitHub account, have previous DDMT add you as collaborator
* download GitHub Desktop
* create new repository on GitHub desktop
* download text editor (Sublime, Brackets, etc.)

## Pages to Update
* `index.html` -- first year retreat info ASAP
* `brochure.html` -- add image files and actual brochure file (for the freshies)
* `contact.html` -- add officer images and update text and links

NOTE: All pages should have webmaster and copyright year footer updated.
TODO: add instagram

## How To Edit Files Locally

* To edit text, use your favorite text editor (like Sublime, TextEdit) to edit the files
* To change an image, find the `<image>` tag and change the path. Make sure the image is added to the img folder.
* To edit and view changes offline, open the .html file in your browser (use a incognito window).
* To update emails, just change the email text and place it in the "mailto:...".
* To update a link, find the `<a>` tag and 1) edit the URL for `href` and 2) edit the text shown.

## Save your changes with CTRL+S

## To view your Changes Locally

* Drag and drop the edited `.html` file from the Finder/Explorer window into your incognito browser window.

## How to Save your Changes to Git

* Use GitHub Desktop to get the webpage files, record changes, and update your changes
* Any "yellow" files should be committed and pushed.
* To commit, add a "Summary" and "Description". Then, press the `Commit to Master` button at the bottom left.
* Press the `Push origin` button at the top.

NOTE: You may have some merge conflicts (see next section). You'll have to look into the code to find `>>>>>>>>>>>>>>>>>>>>>>>>>`'s. These are where the program could not fix it automatically for you, and you need to help it by updating the code manually.

## How to Load Someone Else's Changes to Git

* Click the `Fetch origin` button at the top.
* Then, click the `Pull origin` to pull N changes from remote.

## How to Update Official Site

* Be sure you are on `eduroam`.
* For Mac
	* Open up a new `Finder` window
	* Select "Go" in the top bar menu, and then select "Connect to Server"
	* Enter the following link to connect: `smb://www3files.nd.edu/user/aaa/www`
	* Connect
	* Login using the following credentials: Name=`aaa` Password=(Use the current account password)
	* Copy the changed files from your `local` to the `www` Finder window.
* For Windows
	* Open up a new `Explorer` window
	* Map a network drive (Google this)
	* Connect to `\\www3files.nd.edu\user\aaa\www`
	* Be sure to check the checkbox for `Connect using different credentials`
	* Click `Finish`
	* For the login, use `adnd\aaa` and the account password
* TODO for Anthony: Add git command line examples

NOTE: If you are not on campus or cannot connect to `eduroam`, go to `vpnaccess.nd.edu`. Login, and then go to the next step. You will likely have to access: `vpnaccess.nd.edu/go` since you are a student.

## How to Verify the Changes Made it to the Official Site

* Make sure you are using an `incognito` window!!!
* Reload the page: www.nd.edu/~aaa/[insert-page-name].html

## Tips

* For multi-line edits in Sublime, you can highlight a string of text and then press Command+D (Or CTRL+D).
* To add icons, Google "Font Awesome".