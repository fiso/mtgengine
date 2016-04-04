"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdosDrake extends Card {
  constructor(game) {
    super(game, "Rakdos Drake", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosDrake;
