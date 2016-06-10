"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerpentGenerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpent Generator", "Chronicles", "CHR");
  }
}

module.exports = SerpentGenerator;
