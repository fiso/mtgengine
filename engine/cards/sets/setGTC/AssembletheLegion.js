"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssembletheLegion extends Card {
  constructor(game) {
    super(game, "Assemble the Legion", "Gatecrash", "GTC");
  }
}

module.exports = AssembletheLegion;
