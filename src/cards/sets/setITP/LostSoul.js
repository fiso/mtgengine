"use strict";
const Constants = require ("../../../Constants");
const LostSoulBase = require("../set6ED/LostSoul");

class LostSoul extends LostSoulBase {
  constructor(game) {
    super(game, "Lost Soul", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = LostSoul;
