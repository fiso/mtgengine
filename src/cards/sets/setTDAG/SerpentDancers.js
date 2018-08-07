"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerpentDancers extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpent Dancers", "Defeat a God", "TDAG");
  }
}

module.exports = SerpentDancers;
