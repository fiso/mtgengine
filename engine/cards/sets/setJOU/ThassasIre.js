"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThassasIre extends Card {
  constructor(game) {
    super(game, "Thassa's Ire", "Journey into Nyx", "JOU");
  }
}

module.exports = ThassasIre;
