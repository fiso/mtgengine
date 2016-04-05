"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccorderPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Accorder Paladin", "Mirrodin Besieged", "MBS");
  }
}

module.exports = AccorderPaladin;
