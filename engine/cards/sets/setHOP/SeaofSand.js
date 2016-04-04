"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaofSand extends Card {
  constructor(game) {
    super(game, "Sea of Sand", "Planechase", "HOP");
  }
}

module.exports = SeaofSand;
