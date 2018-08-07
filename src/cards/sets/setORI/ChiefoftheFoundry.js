"use strict";
const Constants = require ("../../../Constants");
const ChiefoftheFoundryBase = require("../setC18/ChiefoftheFoundry");

class ChiefoftheFoundry extends ChiefoftheFoundryBase {
  constructor (game) {
    super(game, "Chief of the Foundry", "Magic Origins", "ORI");
  }
}

module.exports = ChiefoftheFoundry;
