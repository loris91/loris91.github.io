CG - Final Project
================
Loris Marsico - 438540
-----------------------

View the project [here] (http://loris91.github.io).

Code organization
================
* [Animation.js] (scripts/Animation.js): contains functions to create animations.
* [Apartment.js] (scripts/Apartment.js): contains the function for creating the structure of the house (walls and floors)
* [FPSControl.js] (scripts/FPSControl.js): is the code used to switch between trackball system and PointerLock.
* [Init.js] (scripts/Init.js): initializes all the variables, creates the house and takes care of the rendering.
* [Insert_Door.js] (scripts/Insert_Door.js): create and insert all doors in the house.
* [insert_Fixtures.js] (scripts/insert_Fixtures.js): create and insert all fixtures in the house.
* [Insert_Internal_Light.js] (scripts/Insert_Internal_Light.js): create the internal lights of the house.
* [Make_Doos.js] (scripts/Make_Doos.js): contains functions to create doors.
* [Make_Fixtures.js] (scripts/Make_Fixtures.js): contains functions to create fixtures (window and balcony).
* [Painting.js] (scripts/Painting.js): contains functions to painting the rooms.
* [Scene.js] (scripts/Scene.js): contains the function useful for the scene.
* [Utility.js] (scripts/Utility.js): contains the utility function for the project.
* [Video-Audio.js] (scripts/Video-Audio.js): contains functions to load video and audio.
* [Video-Audio_Animation.js] (scripts/Video-Audio_Animation.js): contains functions to the video-audio animations.

Features and Graphic Techniques:
==================
* Textures
* Bump map and normal map
* .obj and .obj/.mtl model files import
* Tween animations
* TrackBallControl
* PointerLockControl (FirstPersonShooter mode)
* Object-Picking
* Particle System
* Skybox
* Video texture
* Audio distance fade
* Sound effects


Animations:
==================
* Doors : open/close (with sound effect)
* Windows : open/close
* Television1: turn it on/off (with sound fade)
* Television2: turn it on/off and changing channel with remote control (with sound fade)
* TV remote control: Change channel (if it's on)
* Guitar: audio on/off (with sound fade)
* Clock: pick it to see what's the current time
* Radio: turn it on/off and changing channel (with sound fade)
* Internal Light: turn it on/off with sound
* Roof: turn it visible/invisible
* night: changes outside light and turns on the lamp posts 
* MicroWawe: rotation of pizza, light and sound effect
* Coffe: preparing american coffee with sound effect
* Lawn mower: movement of the mower around the house with sound effect
* Lown mower Camera: switch camera and looks at the world from above the mower
* Goku : unleash the fury of Goku and his whole energy
* Repair the screen: remedy the damage done by goku