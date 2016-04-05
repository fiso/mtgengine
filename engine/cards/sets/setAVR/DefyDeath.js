"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefyDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Defy Death", "Avacyn Restored", "AVR");
  }
}

module.exports = DefyDeath;
