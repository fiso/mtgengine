"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirMachinations extends Card {
  constructor(game) {
    super(game, "Dimir Machinations", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirMachinations;
