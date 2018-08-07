"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Psychatog extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychatog", "Vintage Masters", "VMA");
  }
}

module.exports = Psychatog;
