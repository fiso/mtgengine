"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaRunner extends Card {
  constructor(game) {
    super(game, "Lava Runner", "Mercadian Masques", "MMQ");
  }
}

module.exports = LavaRunner;
