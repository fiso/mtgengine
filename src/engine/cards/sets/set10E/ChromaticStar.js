"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromaticStar extends UnimplementedCard {
  constructor (game) {
    super(game, "Chromatic Star", "Tenth Edition", "10E");
  }
}

module.exports = ChromaticStar;
