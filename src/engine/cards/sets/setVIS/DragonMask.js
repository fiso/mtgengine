"use strict";
const Constants = require ("../../../Constants");
const DragonMaskBase = require("../set6ED/DragonMask");

class DragonMask extends DragonMaskBase {
  constructor (game) {
    super(game, "Dragon Mask", "Visions", "VIS");
  }
}

module.exports = DragonMask;
