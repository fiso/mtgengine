"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuerrillaTactics extends Card {
  constructor(game) {
    super(game, "Guerrilla Tactics", "Alliances", "ALL");
  }
}

module.exports = GuerrillaTactics;
