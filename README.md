# FileMaker Webviewer Techniques

Started may 2021
Various examples and snippets for using the Claris FileMaker Web Viewer to do cool stuff

Assumes woeking with Clarsi FileMaker 19.2 and above.

This repository is a place to store, and keep track of, techniques using html, css and especially javascript to use in a Claris FileMaker Webviewer.

Using Folders to group example files.

### Jasvascript calls to run a FileMaker Script

The javascript often calls a FileMaker script using:   

```FileMaker.PerformScriptWithOption ( "script name", "parameter", "option" );```  

I tend to define the fileMaker script name at the top of the script, so it is easy to change.
The script name can mbe defined as a cost or var. Const is ok if you only have one sctipt. I often combine small scripts aso const may not work well, therefore in the examples I tend to use var for this. The var can easily be cahnge to const if prefered.

 

