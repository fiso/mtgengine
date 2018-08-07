"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerpentGenerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpent Generator", "Masters Edition", "MED");
  }
}

module.exports = SerpentGenerator;
