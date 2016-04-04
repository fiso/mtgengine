"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SultaiScavenger extends Card {
  constructor(game) {
    super(game, "Sultai Scavenger", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiScavenger;
