"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PillagingHorde extends Card {
  constructor(game) {
    super(game, "Pillaging Horde", "Portal", "POR");
  }
}

module.exports = PillagingHorde;
