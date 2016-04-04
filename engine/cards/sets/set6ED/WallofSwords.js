"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofSwords extends Card {
  constructor(game) {
    super(game, "Wall of Swords", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WallofSwords;
