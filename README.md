## Synopsis

This is a basic website intended to work with React and Bootstrap. This website gives a basic
functionality to show information in a responsive way.

This example is based on the [Sudoku React Component](https://www.npmjs.com/package/sudoku-react-component).

## Installation

This code can be automatically run with docker or without it.

The first thing to do is to [fork this repository](https://help.github.com/articles/fork-a-repo/)
in your account. Once you have it forked you can clone it in your local environment
with the command:

```
git clone {repo-url} ./local-folder
```

Once we have done this, and from the folder we have cloned the code,
we have the instructions to install it in two different ways:

### Docker installation (optional)

Please [install docker](https://docs.docker.com/engine/installation/)
in your local environment before proceed. The installation might be different depending on the
operating system you are running.

Once docker is installed, go to this folder and build the virtual machine with:

```
cd <path-to-this-code>
docker build -t react-exercise .
```

Then execute the following code to run the virtual machine. The webservice will be mapped automatically to the port 80
of our local machine. (ensure no other process is running in the port 80 or it might conflict):

```
docker run -dit --name react-instance -v `pwd`:/storage/app -p 80:8080 react-exercise
```

Note that the container has been created to run as an application. Once running it will
show the standard output and terminating the process will terminate also the container.

To connect to the container we can use (this will allow us to execute commands from
inside the container using the bash shell):

```
docker exec -it react-instance /bin/bash
```

If you need to rerun the virtual machine then we need to remove it first. Maybe the
following commands will help you executing _docker run_ again.

```
docker stop react-instance
docker rm react-instance
```

The docker is doing exactly as the next section, but inside a virtual container. This allows
developers to automatise repetitive actions such deployments, local installations, etc.

To access the application we can type in our browser `http://localhost`

### Local installation (no docker)

Please [install npm](https://www.npmjs.com/get-npm)
in your local environment before proceed. The installation might be different depending on the
operating system you are running.

Then, from the folder we have cloned the code, we can see a `package.json` file.
This file contains the dependencies of our project. To install them type:

```
npm install
```

This will create a folder called `.node_modules` that will contain the dependencies.

Once the dependencies are there, we can start the development server with:

```
npm run start
```

This will start a development server listening by default in the port 8080. To
access the application we can type in our browser `http://localhost:8080`

It will also start a sass compiler that automatically will convert your sass
files into css, creating the main.css file.

## Frontend Frameworks

This exercise uses [bootstrap](https://getbootstrap.com/) and [jquery](https://jquery.com/) aside of
React. This is a common configuration, as React is not responsive per se and the
projects need additional dependencies to improve the frontend.

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS, and it
depends on JQuery.

This exercise has two ways of including these dependencies. If you see in the code that
the libraries are repeated is intentional :) so you can see both approaches.

The first one is including it directly into our HTML, using standard script tags:

```HTML
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.js"></script>
```

The second one is installing them through npm. Then we include them as part of our
React project and we let webpack, when builds the application, to manage the
integration.

```
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
```

In the case of CSS we are usin [SASS](https://sass-lang.com/) to create our `main.css` file.
We include bootstrap classes, etc. through SASS directly so we could potentially
even choose which particular bootstrap components we want to include in our project.

## Testing

This example comes with two different kinds of tests: unit tests and integration/behavioural
tests to check every aspect of the code. The unit tests code coverage is not great as
it's intended to be kept simple.

### Unit testing

The tests are located altogether with the code, under the .test.js extension.

We can run the tests from inside the container or from outside, with:

```
npm run test
```

The command will output the results of the tests. If any assertion didn't succeed, the
system will show the error and a stack trace to know where the problem started.

## Exercises

Several exercises are available to be tried in the [EXERCISES.md](EXERCISES.md) file.

## Contributors

Gorka Guridi <gorka.guridi@gmail.com>
