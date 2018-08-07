"use strict";
const Constants = require ("../../../Constants");
const GripofPhyresisBase = require("../setCM2/GripofPhyresis");

class GripofPhyresis extends GripofPhyresisBase {
  constructor (game) {
    super(game, "Grip of Phyresis", "You Make the Cube", "PZ2");
  }
}

module.exports = GripofPhyresis;
