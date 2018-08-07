"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Threaten extends UnimplementedCard {
  constructor (game) {
    super(game, "Threaten", "Tenth Edition", "10E");
  }
}

module.exports = Threaten;
