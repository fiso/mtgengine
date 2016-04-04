"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurntheImpure extends UnimplementedCard {
  constructor(game) {
    super(game, "Burn the Impure", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BurntheImpure;
