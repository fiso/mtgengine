"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomNantuko extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Nantuko", "Commander 2013 Edition", "C13");
  }
}

module.exports = PhantomNantuko;
