# cs-core
standards for cornell cup cs workflow and git

# Git Standards
The Cornell Cup cs team is in the process of migrating its repositories and practices to a more efficient and clean state.

## Repository Requirements
### Naming
All repository names should be lowercase-with-dashes-as-separators.

Additionally, they should be tagged by their associated team.  For example, cs-modbot.
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
### Branches
### CI
### Issues
### Identity

