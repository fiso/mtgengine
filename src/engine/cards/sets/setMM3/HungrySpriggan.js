"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungrySpriggan extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungry Spriggan", "Modern Masters 2017", "MM3");
  }
}

module.exports = HungrySpriggan;
