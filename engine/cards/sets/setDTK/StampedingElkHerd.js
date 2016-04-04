"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StampedingElkHerd extends Card {
  constructor(game) {
    super(game, "Stampeding Elk Herd", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StampedingElkHerd;
