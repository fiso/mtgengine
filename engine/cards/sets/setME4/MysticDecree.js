"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticDecreeBase = require("../setHML/MysticDecree.js");

class MysticDecree extends MysticDecreeBase {
  constructor(game) {
    super(game, "Mystic Decree", "Masters Edition IV", "ME4");
  }
}

module.exports = MysticDecree;
