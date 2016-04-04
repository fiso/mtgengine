"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OvergrownBattlement extends Card {
  constructor(game) {
    super(game, "Overgrown Battlement", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OvergrownBattlement;
