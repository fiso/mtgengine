"use strict";
const Constants = require ("../../../Constants");
const WalkingCorpseBase = require("../setM19/WalkingCorpse");

class WalkingCorpse extends WalkingCorpseBase {
  constructor (game) {
    super(game, "Walking Corpse", "Welcome Deck 2016", "W16");
  }
}

module.exports = WalkingCorpse;
