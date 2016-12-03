# cs-core-javademo
This repository includes a demo framework for how we would like our Java projects to be structured. Please follow this structure in all Java projects. Remember that the intention is for us to be able to simply clone a repository from github and be able to run it on any of the lab computers. This implies that you must specify all dependencies for your project. 

Once again, use this structure for all our java projects.

# IDE
Intellij is currently the suggested IDE for our team. You can download it at: https://www.jetbrains.com/idea/

In light of this suggestions, we are allowing the .idea file to be included for **Top Level** projects only. This is in order to facilitate quicker sharing of run configurations. However, for any projects that are used as submodules do not include any files from the .idea folder or .iml files. 

# Dependency Management
For dependency management we will be using maven. For internal dependencies we will be using git submodules.

## Maven
In order to manage our libraries and project configuration, we are using maven. Every java project should have a pom.xml in it that configures the project. We will be using maven to build our projects.

The group ID should always be com.cornellcup

The version should always be three numbers. Start with 1.0.0

The current suggested java version is Java 8.

## Submodules
We are using git submodules to manage dependencies on internal repositories. All submodules should be placed in the dependencies folder.

When cloning a project with a submodule, you may need to run:
```bash
git submodule update --init
```

Intellij may also request you attach the submodule as an additional head when you open the project after checking out. You should probably select yes.

To add a submodule to a project:
```bash
cd dependencies
git submodule add <Repository URL>
```

As an additional note, whenever you are refactoring a submodule you should be careful not to break any of the projects that depend on that submodule. Remember to fix any projects that depend on your given submodule when you refactor it.

## Other depdencencies
For libraries that are not in maven or a submodule, include them in the lib folder. This is likely to be native dependencies.