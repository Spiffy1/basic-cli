# The audience intended for this documents are onboarding developers
# This should contain all the information related to:
[-] - Development environment setup guideline <!-- IN progress -->
[ ] - Linting  
[ ] - cicd pipeline procedure
[ ] - coding conventions
[ ] - Docstring Guideline  & Reference  



## Installation Guideline
### Install python version manager & package manager
### Recommended choices are:
####    Anaconda for Windows
####    Pyenv for Ubuntu & MacOS
### Use python version of your choice
### Install virtual venv with pip (help you create virtual environment)
### Install pipenv with pip (package manager, help you create and install packages to and from pipfile)
### Go to root folder of the project
### Create a virtual environment for your project
### virtualenv .venv
### select python intepreter with the venv you just created
### from here you could use pipenv to add new packages to the pipfiles and then use pipenv to install it
### pipenv will automatically select the virtual environment you just created
### To install from pipfile
### pipenv install --skip-lock # install from pipfile
### To install from lock file
### pipenv install --ignore-pipfile 

### Prerequisite: python version manager, python package manager, creating and using virtual environment, virtualenv, pipenv