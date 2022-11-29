# Overview

This file represents a series of exercises that students can try to achieve. They
are divided into three categories to order them by difficulty.

All the exercises are possible and have been tested.

## Basic exercises

1. Change color of the tiles the user is editing at the moment.

This exercise involve only sass updates. [SASS](https://sass-lang.com/) and
[CSS pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

2. When the sudoku is solved, show a message congratulating the user.

For this we will need to understand the SudokuGame component and how to pass it callbacks.

## Medium exercises

1. Render the src/images/logo.png at the top of the Sudoku board.

This exercise involve javascript and the way to import images, embedding them
into our code. Webpack is already prepared to handle it.

2. Transform the navigation into a responsive navigation.

Usually in most projects when we access via mobile we see a hamburguer in the top-right
side of the page that once clicked expands a navigation menu. But, if we access
the website through a desktop browser, the navigation is horitzontal and always visible.
This is what we want to achieve in this exercise.

This can be done with the boostrap [navbar component](https://getbootstrap.com/docs/4.0/components/navbar/).
In this case, we should ignore those classes that modify the look&feel and focus
in the behaviour of the menu.

## Advanced exercises

1. Render the src/images/logo.svg at the top of the Sudoku board, adding unit
   tests to ensure the logo is rendered properly in the application.

This exercise involve javascript and the way to import images, embedding them
into our code. Webpack is not ready to handle it.

It's recommended to install [Enzyme](http://airbnb.io/enzyme/docs/api/ReactWrapper/find.html)
to make the test straightforward.

2. Extend the sudoku to show information about how many tiles are filled up

This exercise involve creating your own React component extending SudokuGame one.
Having access to this component will allow you to print your own HTML and show
extra information that otherwise would be unaccessible.

The extra information will be a div containing the number of tiles filled up
by the user.
