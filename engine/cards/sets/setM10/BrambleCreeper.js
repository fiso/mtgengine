"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrambleCreeper extends Card {
  constructor(game) {
    super(game, "Bramble Creeper", "Magic 2010", "M10");
  }
}

module.exports = BrambleCreeper;
