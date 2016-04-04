"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistDragon extends Card {
  constructor(game) {
    super(game, "Mist Dragon", "Mirage", "MIR");
  }
}

module.exports = MistDragon;
