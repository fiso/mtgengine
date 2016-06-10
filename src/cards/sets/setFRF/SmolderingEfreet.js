"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Efreet", "Fate Reforged", "FRF");
  }
}

module.exports = SmolderingEfreet;
