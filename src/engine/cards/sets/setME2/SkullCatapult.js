"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Skull Catapult", "Masters Edition II", "ME2");
  }
}

module.exports = SkullCatapult;
