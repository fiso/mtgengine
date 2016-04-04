"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathlessAngel extends Card {
  constructor(game) {
    super(game, "Deathless Angel", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DeathlessAngel;
