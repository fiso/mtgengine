"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurriIsland extends Card {
  constructor(game) {
    super(game, "Turri Island", "Planechase", "HOP");
  }
}

module.exports = TurriIsland;
