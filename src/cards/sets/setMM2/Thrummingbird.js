"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrummingbird extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrummingbird", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thrummingbird;
