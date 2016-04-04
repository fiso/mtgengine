"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonMaskBase = require("../set6ED/DragonMask.js");

class DragonMask extends DragonMaskBase {
  constructor(game) {
    super(game, "Dragon Mask", "Visions", "VIS");
  }
}

module.exports = DragonMask;
