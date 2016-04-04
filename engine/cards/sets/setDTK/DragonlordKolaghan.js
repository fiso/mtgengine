"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonlordKolaghan extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragonlord Kolaghan", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonlordKolaghan;
