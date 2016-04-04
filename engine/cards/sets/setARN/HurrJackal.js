"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurrJackal extends UnimplementedCard {
  constructor(game) {
    super(game, "Hurr Jackal", "Arabian Nights", "ARN");
  }
}

module.exports = HurrJackal;
