"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellrider", "Modern Masters 2017", "MM3");
  }
}

module.exports = Hellrider;
