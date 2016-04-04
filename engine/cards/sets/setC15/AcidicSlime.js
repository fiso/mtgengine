"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcidicSlimeBase = require("../setC13/AcidicSlime.js");

class AcidicSlime extends AcidicSlimeBase {
  constructor(game) {
    super(game, "Acidic Slime", "Commander 2015", "C15");
  }
}

module.exports = AcidicSlime;
