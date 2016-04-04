"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tumble extends UnimplementedCard {
  constructor(game) {
    super(game, "Tumble", "Commander 2013 Edition", "C13");
  }
}

module.exports = Tumble;
