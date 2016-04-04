"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindstab extends Card {
  constructor(game) {
    super(game, "Mindstab", "Time Spiral", "TSP");
  }
}

module.exports = Mindstab;
