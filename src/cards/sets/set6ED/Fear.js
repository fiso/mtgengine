"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fear extends UnimplementedCard {
  constructor (game) {
    super(game, "Fear", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fear;
