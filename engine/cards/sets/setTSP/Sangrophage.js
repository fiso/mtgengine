"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sangrophage extends Card {
  constructor(game) {
    super(game, "Sangrophage", "Time Spiral", "TSP");
  }
}

module.exports = Sangrophage;
