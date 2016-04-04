"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PetalmaneBaku extends Card {
  constructor(game) {
    super(game, "Petalmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PetalmaneBaku;
