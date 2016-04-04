"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SacredFoundryBase = require("../setGTC/SacredFoundry.js");

class SacredFoundry extends SacredFoundryBase {
  constructor(game) {
    super(game, "Sacred Foundry", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SacredFoundry;
