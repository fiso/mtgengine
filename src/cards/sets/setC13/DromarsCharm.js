"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromarsCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Dromar's Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = DromarsCharm;
