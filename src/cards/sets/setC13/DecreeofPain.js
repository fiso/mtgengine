"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecreeofPain extends UnimplementedCard {
  constructor (game) {
    super(game, "Decree of Pain", "Commander 2013 Edition", "C13");
  }
}

module.exports = DecreeofPain;
