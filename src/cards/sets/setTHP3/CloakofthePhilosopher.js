"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakofthePhilosopher extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloak of the Philosopher", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = CloakofthePhilosopher;
