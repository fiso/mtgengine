"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TandemLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Tandem Lookout", "Modern Masters 2017", "MM3");
  }
}

module.exports = TandemLookout;
