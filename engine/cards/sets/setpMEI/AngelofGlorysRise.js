"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofGlorysRiseBase = require("../setAVR/AngelofGlorysRise.js");

class AngelofGlorysRise extends AngelofGlorysRiseBase {
  constructor(game) {
    super(game, "Angel of Glory's Rise", "Media Inserts", "pMEI");
  }
}

module.exports = AngelofGlorysRise;
