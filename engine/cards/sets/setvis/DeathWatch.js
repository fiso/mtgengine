"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathWatch extends Card {
  constructor(game) {
    super(game, "Death Watch", "Visions", "VIS");
  }
}

module.exports = DeathWatch;
