"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsShapeshifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Volrath's Shapeshifter", "Stronghold", "STH");
  }
}

module.exports = VolrathsShapeshifter;
