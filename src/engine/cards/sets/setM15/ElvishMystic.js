"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setDDU/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Magic 2015", "M15");
  }
}

module.exports = ElvishMystic;
