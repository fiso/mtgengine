"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Werebear extends UnimplementedCard {
  constructor(game) {
    super(game, "Werebear", "Odyssey", "ODY");
  }
}

module.exports = Werebear;
