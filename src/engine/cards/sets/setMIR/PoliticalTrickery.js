"use strict";
const Constants = require ("../../../Constants");
const PoliticalTrickeryBase = require("../setWC97/PoliticalTrickery");

class PoliticalTrickery extends PoliticalTrickeryBase {
  constructor (game) {
    super(game, "Political Trickery", "Mirage", "MIR");
  }
}

module.exports = PoliticalTrickery;
