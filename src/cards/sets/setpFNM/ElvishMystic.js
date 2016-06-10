"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setC14/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Friday Night Magic", "pFNM");
  }
}

module.exports = ElvishMystic;
