"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setDDU/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Commander Anthology", "CMA");
  }
}

module.exports = ElvishMystic;
