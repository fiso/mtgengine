"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrixisCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Grixis Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = GrixisCharm;
