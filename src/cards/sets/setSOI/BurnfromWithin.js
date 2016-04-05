"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurnfromWithin extends UnimplementedCard {
  constructor(game) {
    super(game, "Burn from Within", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BurnfromWithin;
