"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fluxcharger extends Card {
  constructor(game) {
    super(game, "Fluxcharger", "Dragon's Maze", "DGM");
  }
}

module.exports = Fluxcharger;
