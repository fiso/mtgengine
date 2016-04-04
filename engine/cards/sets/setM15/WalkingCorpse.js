"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WalkingCorpseBase = require("../setISD/WalkingCorpse.js");

class WalkingCorpse extends WalkingCorpseBase {
  constructor(game) {
    super(game, "Walking Corpse", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WalkingCorpse;
