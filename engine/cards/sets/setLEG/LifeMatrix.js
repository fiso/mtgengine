"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifeMatrix extends Card {
  constructor(game) {
    super(game, "Life Matrix", "Legends", "LEG");
  }
}

module.exports = LifeMatrix;
