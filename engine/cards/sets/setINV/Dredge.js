"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dredge extends Card {
  constructor(game) {
    super(game, "Dredge", "Invasion", "INV");
  }
}

module.exports = Dredge;
