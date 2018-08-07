"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KathariBomber extends UnimplementedCard {
  constructor (game) {
    super(game, "Kathari Bomber", "Modern Masters 2017", "MM3");
  }
}

module.exports = KathariBomber;
