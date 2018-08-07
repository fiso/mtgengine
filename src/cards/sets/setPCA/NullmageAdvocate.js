"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullmageAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Nullmage Advocate", "Planechase Anthology", "PCA");
  }
}

module.exports = NullmageAdvocate;
