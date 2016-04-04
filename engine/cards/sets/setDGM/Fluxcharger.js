"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fluxcharger extends UnimplementedCard {
  constructor(game) {
    super(game, "Fluxcharger", "Dragon's Maze", "DGM");
  }
}

module.exports = Fluxcharger;
