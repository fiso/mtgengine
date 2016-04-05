"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Away extends UnimplementedCard {
  constructor(game) {
    super(game, "Away", "Dragon's Maze", "DGM");
  }
}

module.exports = Away;
