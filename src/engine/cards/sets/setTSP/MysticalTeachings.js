"use strict";
const Constants = require ("../../../Constants");
const MysticalTeachingsBase = require("../setMM3/MysticalTeachings");

class MysticalTeachings extends MysticalTeachingsBase {
  constructor (game) {
    super(game, "Mystical Teachings", "Time Spiral", "TSP");
  }
}

module.exports = MysticalTeachings;
