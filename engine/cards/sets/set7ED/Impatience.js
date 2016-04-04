"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Impatience extends Card {
  constructor(game) {
    super(game, "Impatience", "Seventh Edition", "7ED");
  }
}

module.exports = Impatience;
