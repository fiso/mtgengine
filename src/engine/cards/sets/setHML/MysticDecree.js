"use strict";
const Constants = require ("../../../Constants");
const MysticDecreeBase = require("../setME4/MysticDecree");

class MysticDecree extends MysticDecreeBase {
  constructor (game) {
    super(game, "Mystic Decree", "Homelands", "HML");
  }
}

module.exports = MysticDecree;
