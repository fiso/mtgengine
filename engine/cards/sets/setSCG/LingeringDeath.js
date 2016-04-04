"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LingeringDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Lingering Death", "Scourge", "SCG");
  }
}

module.exports = LingeringDeath;
