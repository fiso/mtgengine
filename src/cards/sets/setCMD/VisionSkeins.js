"use strict";
const Constants = require ("../../../Constants");
const VisionSkeinsBase = require("../setC13/VisionSkeins");

class VisionSkeins extends VisionSkeinsBase {
  constructor (game) {
    super(game, "Vision Skeins", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VisionSkeins;
