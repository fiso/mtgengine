"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheBigIdea extends UnimplementedCard {
  constructor (game) {
    super(game, "The Big Idea", "Unstable", "UST");
  }
}

module.exports = TheBigIdea;
