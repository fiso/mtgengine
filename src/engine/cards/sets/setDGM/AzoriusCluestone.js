"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = AzoriusCluestone;
