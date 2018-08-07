"use strict";
const Constants = require ("../../../Constants");
const ViashinoSandstalkerBase = require("../set9ED/ViashinoSandstalker");

class ViashinoSandstalker extends ViashinoSandstalkerBase {
  constructor (game) {
    super(game, "Viashino Sandstalker", "Visions", "VIS");
  }
}

module.exports = ViashinoSandstalker;
