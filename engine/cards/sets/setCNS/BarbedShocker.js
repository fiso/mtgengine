"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedShocker extends Card {
  constructor(game) {
    super(game, "Barbed Shocker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BarbedShocker;
