"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Discombobulate extends UnimplementedCard {
  constructor (game) {
    super(game, "Discombobulate", "Tenth Edition", "10E");
  }
}

module.exports = Discombobulate;
