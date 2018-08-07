"use strict";
const Constants = require ("../../../Constants");
const TheFourthSphereBase = require("../setPCA/TheFourthSphere");

class TheFourthSphere extends TheFourthSphereBase {
  constructor (game) {
    super(game, "The Fourth Sphere", "Planechase", "HOP");
  }
}

module.exports = TheFourthSphere;
