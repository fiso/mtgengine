"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SosukesSummons extends Card {
  constructor(game) {
    super(game, "Sosuke's Summons", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SosukesSummons;
