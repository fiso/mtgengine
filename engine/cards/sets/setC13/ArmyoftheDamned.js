"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmyoftheDamned extends UnimplementedCard {
  constructor(game) {
    super(game, "Army of the Damned", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArmyoftheDamned;
