"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmptytheCatacombs extends Card {
  constructor(game) {
    super(game, "Empty the Catacombs", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EmptytheCatacombs;
