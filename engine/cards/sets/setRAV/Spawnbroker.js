"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spawnbroker extends UnimplementedCard {
  constructor(game) {
    super(game, "Spawnbroker", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Spawnbroker;
