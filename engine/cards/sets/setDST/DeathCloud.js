"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathCloud extends Card {
  constructor(game) {
    super(game, "Death Cloud", "Darksteel", "DST");
  }
}

module.exports = DeathCloud;
