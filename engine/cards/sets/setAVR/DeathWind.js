"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathWind extends Card {
  constructor(game) {
    super(game, "Death Wind", "Avacyn Restored", "AVR");
  }
}

module.exports = DeathWind;
