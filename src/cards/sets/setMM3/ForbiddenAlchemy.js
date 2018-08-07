"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenAlchemy extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidden Alchemy", "Modern Masters 2017", "MM3");
  }
}

module.exports = ForbiddenAlchemy;
