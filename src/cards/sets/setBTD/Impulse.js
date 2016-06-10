"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Impulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Impulse", "Beatdown Box Set", "BTD");
  }
}

module.exports = Impulse;
