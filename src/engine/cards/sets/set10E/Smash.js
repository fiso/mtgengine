"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smash extends UnimplementedCard {
  constructor (game) {
    super(game, "Smash", "Tenth Edition", "10E");
  }
}

module.exports = Smash;
