"use strict";
const Constants = require ("../../../Constants");
const MysticDecreeBase = require("../setHML/MysticDecree");

class MysticDecree extends MysticDecreeBase {
  constructor(game) {
    super(game, "Mystic Decree", "Masters Edition IV", "ME4");
  }
}

module.exports = MysticDecree;
