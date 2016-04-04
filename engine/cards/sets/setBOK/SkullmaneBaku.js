"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullmaneBaku extends Card {
  constructor(game) {
    super(game, "Skullmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SkullmaneBaku;
