"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JundCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Jund Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = JundCharm;
