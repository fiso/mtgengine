"use strict";
const Constants = require ("../../../Constants");
const VibratingSphereBase = require("../setICE/VibratingSphere");

class VibratingSphere extends VibratingSphereBase {
  constructor (game) {
    super(game, "Vibrating Sphere", "Masters Edition IV", "ME4");
  }
}

module.exports = VibratingSphere;
