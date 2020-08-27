This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Versions`
node.js version: `v12.18.2`

### `Requirement`

"react": `^16.13.1`<br>
"react-dom": `^16.13.1`<br>
"react-router-dom": `^5.2.0`<br>
"react-scripts": `3.4.1`<br>

### `Usage`
#### Config file

```
const homeConfig=
{
    name:'home',          *Name of the icon button*<br>
    icon:"fas fa-home",   *The code used from Font Awesome to show the icon button*<br>
    color:'#4d4d00',      *The initial color of the icon and the name*<br>
    path:"/",             *The webpage path*<br>
    function:Home,        *The function of the page*<br>
    exact: true           *Let the user led to the path correctly*<br>
}
```
```
const itemData =   
{
    id: 0,                     *The id of the object*
    name: "button1",           *Name of the icon button*
    icon:"far fa-comment-dots",*The code used from Font Awesome to show the icon*
    titleStyle: 'none',        *Set to 'none' when initialize if you want the submenu invisible*
    color:'#4d4d00',           *The initial color of the icon and the name*
    submenu:[
    {
        id: 1,                 *The id of the submenu object*
        index:0,               *The index of the submenu object, and needed to be set to '0'*
                               *when initailize*
        name:"subpage1",       *Name of the submenu item*
        path:"/subpage1",      *Path of the submenu page*
        function: Subpage1,    *Fuction of the submenu page*
    },
   ]
}
```
```
const itemConfig = {
    background: "#ffffb3",         *The color of menu background*
    fontColor: "#4d4d00",          *The color of icon and font*
    colorChange: "#ff6600"         *The color change to when we click icon or name*
}
```
```
const submenuData = {  
    background:"#ffcc66"           *The color of submenu background*
}
```
```
const button={
    listButton:"fas fa-bars fa-2x", *The code used from Font Awesome to show the icon button--list*
    crossButton:"fas fa-times fa-2x"*The code used from Font Awesome to show the icon button--cross*
}
```