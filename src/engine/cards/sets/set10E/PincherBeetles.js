"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PincherBeetles extends UnimplementedCard {
  constructor (game) {
    super(game, "Pincher Beetles", "Tenth Edition", "10E");
  }
}

module.exports = PincherBeetles;
