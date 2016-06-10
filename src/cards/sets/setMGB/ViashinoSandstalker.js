"use strict";
const Constants = require ("../../../Constants");
const ViashinoSandstalkerBase = require("../set8ED/ViashinoSandstalker");

class ViashinoSandstalker extends ViashinoSandstalkerBase {
  constructor (game) {
    super(game, "Viashino Sandstalker", "Multiverse Gift Box", "MGB");
  }
}

module.exports = ViashinoSandstalker;
