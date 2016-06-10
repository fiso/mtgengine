"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Annihilate extends UnimplementedCard {
  constructor (game) {
    super(game, "Annihilate", "Commander 2013 Edition", "C13");
  }
}

module.exports = Annihilate;
