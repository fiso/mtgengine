"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Subdue extends Card {
  constructor(game) {
    super(game, "Subdue", "Legends", "LEG");
  }
}

module.exports = Subdue;
