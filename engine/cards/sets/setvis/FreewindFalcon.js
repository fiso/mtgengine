"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FreewindFalconBase = require("../setATH/FreewindFalcon.js");

class FreewindFalcon extends FreewindFalconBase {
  constructor(game) {
    super(game, "Freewind Falcon", "Visions", "VIS");
  }
}

module.exports = FreewindFalcon;
