"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TajicBladeoftheLegion extends UnimplementedCard {
  constructor(game) {
    super(game, "Tajic, Blade of the Legion", "Dragon's Maze", "DGM");
  }
}

module.exports = TajicBladeoftheLegion;
