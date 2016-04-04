"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disrupt extends Card {
  constructor(game) {
    super(game, "Disrupt", "Invasion", "INV");
  }
}

module.exports = Disrupt;
