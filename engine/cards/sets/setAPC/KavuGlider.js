"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuGlider extends Card {
  constructor(game) {
    super(game, "Kavu Glider", "Apocalypse", "APC");
  }
}

module.exports = KavuGlider;
