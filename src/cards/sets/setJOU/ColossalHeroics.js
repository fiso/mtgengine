"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColossalHeroics extends UnimplementedCard {
  constructor (game) {
    super(game, "Colossal Heroics", "Journey into Nyx", "JOU");
  }
}

module.exports = ColossalHeroics;
