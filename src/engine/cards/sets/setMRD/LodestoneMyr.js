"use strict";
const Constants = require ("../../../Constants");
const LodestoneMyrBase = require("../setMM2/LodestoneMyr");

class LodestoneMyr extends LodestoneMyrBase {
  constructor (game) {
    super(game, "Lodestone Myr", "Mirrodin", "MRD");
  }
}

module.exports = LodestoneMyr;
