# FileMaker Webviewer Techniques

Started May 2021.
Various examples and snippets for using the Claris FileMaker Web Viewer to do cool stuff

Assumes working with Claris FileMaker 19.2 and above.

This repository is a place to store, and keep track of, techniques using html, css and especially javascript to use in a Claris FileMaker Web-viewer.

Using Folders to group example files.

### Javascript calls to run a FileMaker Script

The javascript often calls a FileMaker script using:   

```FileMaker.PerformScriptWithOption ( "script name", "parameter", "option" );```  

I tend to define the fileMaker script name at the top of the script, so it is easy to change.
The script name can be defined as a const or var. Const is ok if you only have one script. I often combine small scripts so using const may cause issues, therefore in the examples I tend to use var for this. var can easily be changed to const if preferred.

 

