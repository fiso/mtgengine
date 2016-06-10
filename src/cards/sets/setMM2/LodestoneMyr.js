"use strict";
const Constants = require ("../../../Constants");
const LodestoneMyrBase = require("../setMRD/LodestoneMyr");

class LodestoneMyr extends LodestoneMyrBase {
  constructor (game) {
    super(game, "Lodestone Myr", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LodestoneMyr;
