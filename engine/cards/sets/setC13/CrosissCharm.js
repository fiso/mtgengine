"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrosissCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Crosis's Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = CrosissCharm;
