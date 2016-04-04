"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TajicBladeoftheLegion extends Card {
  constructor(game) {
    super(game, "Tajic, Blade of the Legion", "Dragon's Maze", "DGM");
  }
}

module.exports = TajicBladeoftheLegion;
