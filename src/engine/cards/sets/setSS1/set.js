"use strict";
module.exports = {
  BlueElementalBlast: require("./BlueElementalBlast"),
  Brainstorm: require("./Brainstorm"),
  Counterspell: require("./Counterspell"),
  GiftsUngiven: require("./GiftsUngiven"),
  JaceBeleren: require("./JaceBeleren"),
  MysticalTutor: require("./MysticalTutor"),
  Negate: require("./Negate"),
  ThreadsofDisloyalty: require("./ThreadsofDisloyalty")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setSS1 = module.exports;}