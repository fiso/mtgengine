"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringGreed extends UnimplementedCard {
  constructor (game) {
    super(game, "Devouring Greed", "Modern Masters 2015", "MM2");
  }
}

module.exports = DevouringGreed;
