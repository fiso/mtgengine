"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofVines extends Card {
  constructor(game) {
    super(game, "Wall of Vines", "Magic 2011", "M11");
  }
}

module.exports = WallofVines;
