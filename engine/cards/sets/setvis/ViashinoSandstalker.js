"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViashinoSandstalkerBase = require("../set8ED/ViashinoSandstalker.js");

class ViashinoSandstalker extends ViashinoSandstalkerBase {
  constructor(game) {
    super(game, "Viashino Sandstalker", "Visions", "VIS");
  }
}

module.exports = ViashinoSandstalker;
