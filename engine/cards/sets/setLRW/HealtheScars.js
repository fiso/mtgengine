"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealtheScars extends UnimplementedCard {
  constructor(game) {
    super(game, "Heal the Scars", "Lorwyn", "LRW");
  }
}

module.exports = HealtheScars;
