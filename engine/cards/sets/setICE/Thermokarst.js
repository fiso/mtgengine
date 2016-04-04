"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thermokarst extends Card {
  constructor(game) {
    super(game, "Thermokarst", "Ice Age", "ICE");
  }
}

module.exports = Thermokarst;
