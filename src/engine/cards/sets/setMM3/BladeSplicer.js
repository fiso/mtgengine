"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladeSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Blade Splicer", "Modern Masters 2017", "MM3");
  }
}

module.exports = BladeSplicer;
