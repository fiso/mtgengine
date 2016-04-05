"use strict";
const Constants = require ("../../../Constants");
const NeurokInvisimancerBase = require("../setDDI/NeurokInvisimancer");

class NeurokInvisimancer extends NeurokInvisimancerBase {
  constructor(game) {
    super(game, "Neurok Invisimancer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NeurokInvisimancer;
