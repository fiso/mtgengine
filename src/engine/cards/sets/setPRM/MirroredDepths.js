"use strict";
const Constants = require ("../../../Constants");
const MirroredDepthsBase = require("../setPCA/MirroredDepths");

class MirroredDepths extends MirroredDepthsBase {
  constructor (game) {
    super(game, "Mirrored Depths", "Magic Online Promos", "PRM");
  }
}

module.exports = MirroredDepths;
