"use strict";
const Constants = require ("../../../Constants");
const BeastmasterAscensionBase = require("../setCMA/BeastmasterAscension");

class BeastmasterAscension extends BeastmasterAscensionBase {
  constructor (game) {
    super(game, "Beastmaster Ascension", "Commander 2015", "C15");
  }
}

module.exports = BeastmasterAscension;
