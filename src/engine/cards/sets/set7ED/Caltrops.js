"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Caltrops extends UnimplementedCard {
  constructor (game) {
    super(game, "Caltrops", "Seventh Edition", "7ED");
  }
}

module.exports = Caltrops;
