"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VanguardsShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Vanguard's Shield", "Avacyn Restored", "AVR");
  }
}

module.exports = VanguardsShield;
