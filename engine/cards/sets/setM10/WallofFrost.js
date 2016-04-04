"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofFrost extends Card {
  constructor(game) {
    super(game, "Wall of Frost", "Magic 2010", "M10");
  }
}

module.exports = WallofFrost;
