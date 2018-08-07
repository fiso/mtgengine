"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniasChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Titania's Chosen", "Commander Anthology", "CMA");
  }
}

module.exports = TitaniasChosen;
