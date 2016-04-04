"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SleepersRobe extends Card {
  constructor(game) {
    super(game, "Sleeper's Robe", "Invasion", "INV");
  }
}

module.exports = SleepersRobe;
