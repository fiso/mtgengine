"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = BorosCharm;
