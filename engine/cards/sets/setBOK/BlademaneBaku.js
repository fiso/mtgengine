"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlademaneBaku extends Card {
  constructor(game) {
    super(game, "Blademane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlademaneBaku;
