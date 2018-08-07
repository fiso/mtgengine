"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setDDU/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Commander 2014", "C14");
  }
}

module.exports = ElvishMystic;
