# LC-A6-prep

Prep for graded assignment 6 in LaunchCode's WebDev unit - Angular

Recording of live session held on 11/7/20: https://youtu.be/FTx20WaC3xI

Note: since the live session, I fixed a CSS conflict and a duplicated \*ngIf directive that caused little issues during the live session. I also added functionality to deal with items that are left blank when a list is being edited - the saveList() method goes through and removes any with empty strings before saving, and you can see when returning to the checklist that they are gone. So if you want to delete an item, just blank out its field in edit mode.

Students - FORK this to your own account and then clone down to your local machine. Use the **starter-code** branch to code along with the video. You can also reference the **solution** branch to study my code.

Initially when you open the project in VSCode on your local computer, you will be in the main/master branch. Use the command 'git branch' in the terminal to view all available branches as shown below:
<img width="1167" alt="Screen Shot 2021-03-31 at 8 34 45 PM" src="https://user-images.githubusercontent.com/55961845/113317047-98d8d000-92d4-11eb-9f31-58fd11865f7e.png">

Then use 'git checkout starter-code' to switch to the starter-code branch:
<img width="1164" alt="Screen Shot 2021-03-31 at 8 35 22 PM" src="https://user-images.githubusercontent.com/55961845/113317065-9b3b2a00-92d4-11eb-9021-a9fa1ef928b5.png">

If you wish to reference the solution, you can switch to that branch anytime as well.

This is part of a larger group of practice exercises and examples for students of LaunchCode's Web Development course (unit 1). See [this document](https://tinyurl.com/y3bn6st4) for the full list of repls, respositories, etc. 
