"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofDust extends Card {
  constructor(game) {
    super(game, "Wall of Dust", "Fourth Edition", "4ED");
  }
}

module.exports = WallofDust;
