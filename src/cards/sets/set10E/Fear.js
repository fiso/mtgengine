"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fear extends UnimplementedCard {
  constructor (game) {
    super(game, "Fear", "Tenth Edition", "10E");
  }
}

module.exports = Fear;
