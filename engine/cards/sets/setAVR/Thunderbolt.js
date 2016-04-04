"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thunderbolt extends Card {
  constructor(game) {
    super(game, "Thunderbolt", "Avacyn Restored", "AVR");
  }
}

module.exports = Thunderbolt;
