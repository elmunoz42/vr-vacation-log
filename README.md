# This is a study based on 
https://www.linkedin.com/learning/learning-react-vr/welcome?autoplay=true&resume=false

# React VR / React 360 Framework for creating AR/VR Applications

## Introduction:

Talk by Instagram and Oculus devs:

https://www.youtube.com/watch?v=t-645fMmuD0

- React VR has been renamed React 360 some documentation pages no longer exists, it seems that this project is a bit amorphous or in transition at this moment.

- React VR is based on React because React is...
* Declarative - UI creation is simplified by using declarations of what you want to see.
* Component Based - UI elements are components that are developed in components.

- Furthermore its based specifically on React Native
* Learn Once, Write Everywhere - Write for Web, Android, iOS, Oculus... with the same language.
* React Native has native modules for the given hardware

- React VR is built on top of React Native

- If you inspect the browser elements you'll see that React VR uses a <canvas> html element to render the Virtual reality experience. I haven't found the chrome development tools to be particularly useful in inpspecting the VR scenes for that reason. Learning about canvas might be a worthwile goal in understanding how this framework is put together.

## Cook Book:

1. To create a 360 image use the Pano element and simply call the jpeg file that you added to the static_assets folder.
2. You can create Primitive 3d objects using the Sphere, Box, Cylinder and other 3d elements from the react vr library. (TODO this is not working for me)
3. Using VrButton and react state you can change the background (or other display features) of the app. This can create a navigation experience.

## Other resources:

2022 React VR Article
https://www.inapps.net/how-to-make-react-vr-apps-in-2022

Quick Introdutory Canvas tutorial
https://youtu.be/3GqUM4mEYKA




