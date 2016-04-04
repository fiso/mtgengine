"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spirespine extends Card {
  constructor(game) {
    super(game, "Spirespine", "Journey into Nyx", "JOU");
  }
}

module.exports = Spirespine;
