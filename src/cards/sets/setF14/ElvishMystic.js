"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setDDU/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Friday Night Magic 2014", "F14");
  }
}

module.exports = ElvishMystic;
