"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Naya Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = NayaCharm;
