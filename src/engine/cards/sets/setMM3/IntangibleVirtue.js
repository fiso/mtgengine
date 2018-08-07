"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntangibleVirtue extends UnimplementedCard {
  constructor (game) {
    super(game, "Intangible Virtue", "Modern Masters 2017", "MM3");
  }
}

module.exports = IntangibleVirtue;
