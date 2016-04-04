"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantTortoise extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Tortoise", "Arabian Nights", "ARN");
  }
}

module.exports = GiantTortoise;
