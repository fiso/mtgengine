"use strict";
const Constants = require ("../../../Constants");
const BeastmasterAscensionBase = require("../setCMA/BeastmasterAscension");

class BeastmasterAscension extends BeastmasterAscensionBase {
  constructor (game) {
    super(game, "Beastmaster Ascension", "Commander 2016", "C16");
  }
}

module.exports = BeastmasterAscension;
