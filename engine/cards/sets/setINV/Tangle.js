"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tangle extends Card {
  constructor(game) {
    super(game, "Tangle", "Invasion", "INV");
  }
}

module.exports = Tangle;
