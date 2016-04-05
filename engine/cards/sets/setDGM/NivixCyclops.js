"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NivixCyclops extends UnimplementedCard {
  constructor(game) {
    super(game, "Nivix Cyclops", "Dragon's Maze", "DGM");
  }
}

module.exports = NivixCyclops;
