"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptytheCatacombs extends UnimplementedCard {
  constructor(game) {
    super(game, "Empty the Catacombs", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EmptytheCatacombs;
