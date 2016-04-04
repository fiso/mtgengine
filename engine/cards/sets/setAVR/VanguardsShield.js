"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VanguardsShield extends Card {
  constructor(game) {
    super(game, "Vanguard's Shield", "Avacyn Restored", "AVR");
  }
}

module.exports = VanguardsShield;
