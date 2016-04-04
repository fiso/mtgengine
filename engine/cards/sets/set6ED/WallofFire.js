"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofFire extends Card {
  constructor(game) {
    super(game, "Wall of Fire", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WallofFire;
