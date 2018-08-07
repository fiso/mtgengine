"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Werebear extends UnimplementedCard {
  constructor (game) {
    super(game, "Werebear", "Eternal Masters", "EMA");
  }
}

module.exports = Werebear;
