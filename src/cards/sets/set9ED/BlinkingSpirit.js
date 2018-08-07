"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkingSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinking Spirit", "Ninth Edition", "9ED");
  }
}

module.exports = BlinkingSpirit;
