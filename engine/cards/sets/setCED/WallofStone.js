"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofStone extends Card {
  constructor(game) {
    super(game, "Wall of Stone", "Collector's Edition", "CED");
  }
}

module.exports = WallofStone;
