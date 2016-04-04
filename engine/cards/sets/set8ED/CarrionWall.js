"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionWall extends Card {
  constructor(game) {
    super(game, "Carrion Wall", "Eighth Edition", "8ED");
  }
}

module.exports = CarrionWall;
