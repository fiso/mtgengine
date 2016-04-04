"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofWonder extends Card {
  constructor(game) {
    super(game, "Wall of Wonder", "Chronicles", "CHR");
  }
}

module.exports = WallofWonder;
