"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleepersRobe extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleeper's Robe", "Invasion", "INV");
  }
}

module.exports = SleepersRobe;
