"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmyoftheDamned extends Card {
  constructor(game) {
    super(game, "Army of the Damned", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArmyoftheDamned;
