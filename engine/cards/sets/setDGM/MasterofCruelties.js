"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofCruelties extends UnimplementedCard {
  constructor(game) {
    super(game, "Master of Cruelties", "Dragon's Maze", "DGM");
  }
}

module.exports = MasterofCruelties;
