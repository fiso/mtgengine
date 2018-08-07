"use strict";
const Constants = require ("../../../Constants");
const ElvishMysticBase = require("../setDDU/ElvishMystic");

class ElvishMystic extends ElvishMysticBase {
  constructor (game) {
    super(game, "Elvish Mystic", "Magic 2014", "M14");
  }
}

module.exports = ElvishMystic;
