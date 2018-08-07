"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActofHeroism extends UnimplementedCard {
  constructor (game) {
    super(game, "Act of Heroism", "Masters 25", "A25");
  }
}

module.exports = ActofHeroism;
