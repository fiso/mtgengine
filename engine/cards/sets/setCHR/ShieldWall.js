"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldWall extends Card {
  constructor(game) {
    super(game, "Shield Wall", "Chronicles", "CHR");
  }
}

module.exports = ShieldWall;
