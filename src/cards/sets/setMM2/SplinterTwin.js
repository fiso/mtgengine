"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplinterTwin extends UnimplementedCard {
  constructor (game) {
    super(game, "Splinter Twin", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SplinterTwin;
