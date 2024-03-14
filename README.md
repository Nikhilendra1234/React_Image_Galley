# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- <h1>React Image Gallery</h1>

<h2>project set up</h2>
<h5>1. create project - npm create vite@latest</h5>
<h5>2. go to project folder - cd project name</h5>
<h5>3. install all the dependencies - npm install</h5>
<h5>4. install axios- npm install axios</h5>
<h5>4. install dependencies for react Router - npm install react-router-dom</h5>
<h5>5. then run the project - npm run dev</h5>

<h2>Image List component</h2>
<p>Image Details is the compoent where all the images loaded and rendered in the webpage. in this component imported functions from the custom hook useCustomLoader and the loaded image list is displayed .in this two button previous and next  for pagination technique .so that user can  move previous and next image list.used link imported from react-router-dom to navigate withoiut affect the spa functionality of the React. </p>

<h2>Image Details component</h2>
<p>
  in this component all the description about an image is given which is fetched using the axios and shown in the web page .in this component used useState hook for holding the state that data is downloaded or not if downloaded then show the details otherwise show the loading component. used useEffect hook so that the function downloadImage() can be called at the first render of the component.used useParam hook to fetch the image id from the url so that image can be download by its id.after downloading the data it is stored in an object then render conditionally if the data is downloaded or not.
</p>

<h2>Loading component</h2>
<p>This compoent used to render the loading effect in the webpage it is being imported in other webpages and rendered conditionally.</p>

<h2>Images component</h2>
<P>This compoent is used to display the images listed in the imageist component.it takes the image source url through props and display the image using image tag .</P>

<h2>CustomLoader Hook</h2>
<P>It is an implementation of the custom hook technique in this hook we have maintained several states for the loading state ,imagelist state ,offset value state and image url state . in this hook the actual loading of the image happens and data is returned to the caller compoent which is ImageDetails. after all this  exported the functions and variables to be accessed in the other compoents.</P>

<h3>visit site with Netlify <a href="https://nikhil-image-gallery.netlify.app">visit site</a></h3>
