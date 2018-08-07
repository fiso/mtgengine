"use strict";
const Constants = require ("../../../Constants");
const BeastmasterAscensionBase = require("../setCMA/BeastmasterAscension");

class BeastmasterAscension extends BeastmasterAscensionBase {
  constructor (game) {
    super(game, "Beastmaster Ascension", "Commander 2014", "C14");
  }
}

module.exports = BeastmasterAscension;
