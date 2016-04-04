"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldenWish extends UnimplementedCard {
  constructor(game) {
    super(game, "Golden Wish", "Judgment", "JUD");
  }
}

module.exports = GoldenWish;
