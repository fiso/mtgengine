"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Sin Collector", "Dragon's Maze", "DGM");
  }
}

module.exports = SinCollector;
