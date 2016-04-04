"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastmasterAscensionBase = require("../setC14/BeastmasterAscension.js");

class BeastmasterAscension extends BeastmasterAscensionBase {
  constructor(game) {
    super(game, "Beastmaster Ascension", "Commander 2015", "C15");
  }
}

module.exports = BeastmasterAscension;
