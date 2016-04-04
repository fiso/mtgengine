"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcidicSlimeBase = require("../setC13/AcidicSlime.js");

class AcidicSlime extends AcidicSlimeBase {
  constructor(game) {
    super(game, "Acidic Slime", "Magic 2011", "M11");
  }
}

module.exports = AcidicSlime;
