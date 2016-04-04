"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntingEchoes extends Card {
  constructor(game) {
    super(game, "Haunting Echoes", "Magic 2010", "M10");
  }
}

module.exports = HauntingEchoes;
