CUSTOM WORKFLOW

Things you need:
node
grunt
compass
sass
node
ruby


// version control
// ------------------------------------------------
// get version control on folder. cd to folder:
// initialises an empty repo in the folder
git init

// add files to staging area
git add . (or add -A)

// commit
git commit -m “first”

// make .gitignore file
// go to https://gist.github.com/octocat/9257657
// save code into main directory as .gitignore
// add *.sass-cache* at end if using sass



// managing packages 
// ------------------------------------------------
// packages.json is like a preset file that can be shared with others in a team
// this way all are working with the same modules on the same versions
// make a packages.json file in main directory of project (add code from project)

// in terminal, install all this in cd by typing the following
npm install



// grunt 
// ------------------------------------------------
// install globaly
sudo npm install -g grunt-cli
// when installed, add a gruntfile.js (add code from project)
// this file can be configured to create tasks, such as the uglify or watch task

// execute grunt uglify (compression) task
grunt uglify

// execute uglify with every change
grunt watch

// with default task added just need to run:
grunt


// compass and sass
// ------------------------------------------------
// make sure the ruby environment is all good
sudo gem update —system

// install compass and sass
sudo gem install compass

// create config.rb (add code from project) to tell ruby where everything is

















