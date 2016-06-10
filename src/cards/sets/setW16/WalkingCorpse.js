"use strict";
const Constants = require ("../../../Constants");
const WalkingCorpseBase = require("../setISD/WalkingCorpse");

class WalkingCorpse extends WalkingCorpseBase {
  constructor (game) {
    super(game, "Walking Corpse", "Welcome Deck 2016", "W16");
  }
}

module.exports = WalkingCorpse;
