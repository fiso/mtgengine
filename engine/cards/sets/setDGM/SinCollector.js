"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinCollector extends Card {
  constructor(game) {
    super(game, "Sin Collector", "Dragon's Maze", "DGM");
  }
}

module.exports = SinCollector;
