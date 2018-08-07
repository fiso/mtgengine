"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofOrzhova extends UnimplementedCard {
  constructor (game) {
    super(game, "Gift of Orzhova", "Modern Masters 2017", "MM3");
  }
}

module.exports = GiftofOrzhova;
