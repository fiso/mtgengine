"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Restrain extends Card {
  constructor(game) {
    super(game, "Restrain", "Invasion", "INV");
  }
}

module.exports = Restrain;
