"use strict";
const Constants = require ("../../../Constants");
const WalkingCorpseBase = require("../setM19/WalkingCorpse");

class WalkingCorpse extends WalkingCorpseBase {
  constructor (game) {
    super(game, "Walking Corpse", "Magic 2013", "M13");
  }
}

module.exports = WalkingCorpse;
