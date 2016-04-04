"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleofTriumph extends Card {
  constructor(game) {
    super(game, "Temple of Triumph", "Theros", "THS");
  }
}

module.exports = TempleofTriumph;
