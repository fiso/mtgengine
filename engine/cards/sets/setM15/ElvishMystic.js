"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishMysticBase = require("../setC14/ElvishMystic.js");

class ElvishMystic extends ElvishMysticBase {
  constructor(game) {
    super(game, "Elvish Mystic", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ElvishMystic;
