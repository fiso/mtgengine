"use strict";
const Constants = require ("../../../Constants");
const AstralCornucopiaBase = require("../setCM2/AstralCornucopia");

class AstralCornucopia extends AstralCornucopiaBase {
  constructor (game) {
    super(game, "Astral Cornucopia", "Born of the Gods", "BNG");
  }
}

module.exports = AstralCornucopia;
