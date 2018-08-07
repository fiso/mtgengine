"use strict";
const Constants = require ("../../../Constants");
const VibratingSphereBase = require("../setME4/VibratingSphere");

class VibratingSphere extends VibratingSphereBase {
  constructor (game) {
    super(game, "Vibrating Sphere", "Ice Age", "ICE");
  }
}

module.exports = VibratingSphere;
