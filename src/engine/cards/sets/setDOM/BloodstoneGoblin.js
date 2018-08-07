"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodstoneGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodstone Goblin", "Dominaria", "DOM");
  }
}

module.exports = BloodstoneGoblin;
