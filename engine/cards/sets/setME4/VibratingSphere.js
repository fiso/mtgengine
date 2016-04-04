"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VibratingSphereBase = require("../setICE/VibratingSphere.js");

class VibratingSphere extends VibratingSphereBase {
  constructor(game) {
    super(game, "Vibrating Sphere", "Masters Edition IV", "ME4");
  }
}

module.exports = VibratingSphere;
