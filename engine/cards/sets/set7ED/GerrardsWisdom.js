"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GerrardsWisdom extends Card {
  constructor(game) {
    super(game, "Gerrard's Wisdom", "Seventh Edition", "7ED");
  }
}

module.exports = GerrardsWisdom;
