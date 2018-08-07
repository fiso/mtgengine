"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Prosperity extends UnimplementedCard {
  constructor (game) {
    super(game, "Prosperity", "Commander 2013", "C13");
  }
}

module.exports = Prosperity;
