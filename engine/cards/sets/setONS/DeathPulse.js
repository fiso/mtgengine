"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathPulse extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Pulse", "Onslaught", "ONS");
  }
}

module.exports = DeathPulse;
