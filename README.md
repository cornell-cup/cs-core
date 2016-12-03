# cs-core
standards for cornell cup cs workflow and git

# Git Standards
The Cornell Cup CS team is in the process of migrating its repositories and practices to a more efficient and clean state.

## Repository Requirements
### Naming
All repository names should be lowercase-with-dashes-as-separators.

Additionally, they should be tagged by their associated team or project.  For example, cs-modbot.
### README.md
Every repository should have a README.md file in the top level. This readme should include:

1. A brief description of the purpose of the repository
2. Clear, verifiable instructions on how to set up and run the project for the repository, if applicable.
### Tagline
Each repository has a tagline.  This is what you see when viewing all repositories on the cornell cup.  Taglines should serve as a brief but clear description of the repository.

### .gitignore
Repositories should only have the files needed to run their project on them.  Dependencies such as node_modules or extensive libraries such as OpenCV should be listed as a requirement and installed separately where appropriate.

Every repository should have a .gitignore unless it is clearly not needed (for example, this repository).  The gitignore should serve to prevent anyone from pushing files that are clearly not needed (such as temporary build files).

### Certification
All repositories which comply with the guidelines will be marked [clean] in the tagline.  If a [clean] repository no longer complies with the standard, the tag should be removed and a git issue should be raised if appropriate.

## Git Workflow
This section is not necessarily required on every repository, though should be strongly considered.

### Branches
In addition to other branches, repositories conforming to this standard will have a develop, rc, and a master branch.

The master branch serves as the last stable release of the repository's code. This facilitates easily building the code in case a prototype is needed.

The rc branch sits in between the develop and master branch.  This is code that is meant for release but is still being tested.

The develop branch is the most up-to-date branch for reviewed code.

In order to add code to master, then, it must first go through develop.  If you want to contribute code to a repository, then, you should follow this workflow:

1. Fetch the most recent changes from the origin repository, then checkout to the develop branch.
2. Checkout a feature branch with a descriptive name.  For example, if the branch was for a waypoints feature, and we had an issue numbered 63 for waypoints, the branch would be called 63_waypoints.
3. Develop on this feature branch until you feel the code is ready to be merged into develop.
4. Push all of your code to Git, then create a Pull Request on GitHub.  Make sure the base is set to develop and the merging branch is set to your feature branch.
5. Wait for another team member to do a review of your code. If the team member makes any comments, address the issue by either fixing it or discussing it with the team member.
6. When another team member is satisfied with the code, that team member will merge the code into develop.

When the manager of the repository wants to prepare the code for a release, the code from develop should be merged into rc, then end-to-end testing should be performed on the rc branch.  If testing goes well, the code can be merged into master.

In summary, the workflow looks like this:

develop --Create Branch-> feature --PR-> develop --Prepare For Release-> rc --Tested-> master
### CI
TODO: In the future, we wish to set up a continuous integration server to ensure all code is tested and no changes cause issues.
### Issues
While we are using Jira in order to track any tasks, issues may be used to report small bugs if it is not appropriate on Jira.

### Identity
All code pushed by you should be pushed using your GitHub credentials in order to track code contributions and work. 

TODO: Tutorial on making sure this happens. (git config --global user.name/user.email)

## Language-Specific Requirements

We additionally have requirements specific to each repository. They are tracked in the language-specific folder of this repo. At the current time, we have specific requirements for:

- Java
- JavaScript

## Tools

While this is a work in progress, this repository also contains tools for all 
CS computers to include. The .bashrc in this repo should be copied into every
computer's bashrc and the tools folder should be linked. Note from the bashrc,
this repo must be cloned until the local home directory.
