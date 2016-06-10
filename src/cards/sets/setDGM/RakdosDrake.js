"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Drake", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosDrake;
