"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Combust extends UnimplementedCard {
  constructor (game) {
    super(game, "Combust", "Modern Masters 2015", "MM2");
  }
}

module.exports = Combust;
