"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorsStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior's Stand", "Portal Second Age", "PO2");
  }
}

module.exports = WarriorsStand;
