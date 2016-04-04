"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderWall extends Card {
  constructor(game) {
    super(game, "Thunder Wall", "Ice Age", "ICE");
  }
}

module.exports = ThunderWall;
