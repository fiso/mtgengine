"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Floodgate extends Card {
  constructor(game) {
    super(game, "Floodgate", "Mirage", "MIR");
  }
}

module.exports = Floodgate;
