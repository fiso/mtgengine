"use strict";
const Constants = require ("../../../Constants");
const LostSoulBase = require("../set6ED/LostSoul");

class LostSoul extends LostSoulBase {
  constructor(game) {
    super(game, "Lost Soul", "Legends", "LEG");
  }
}

module.exports = LostSoul;
