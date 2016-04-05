"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaunterofNightveil extends UnimplementedCard {
  constructor(game) {
    super(game, "Haunter of Nightveil", "Dragon's Maze", "DGM");
  }
}

module.exports = HaunterofNightveil;
