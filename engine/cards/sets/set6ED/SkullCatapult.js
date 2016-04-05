"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullCatapult extends UnimplementedCard {
  constructor(game) {
    super(game, "Skull Catapult", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SkullCatapult;
