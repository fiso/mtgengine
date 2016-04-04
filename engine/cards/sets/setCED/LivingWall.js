"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingWall extends Card {
  constructor(game) {
    super(game, "Living Wall", "Collector's Edition", "CED");
  }
}

module.exports = LivingWall;
