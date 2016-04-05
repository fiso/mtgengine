"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinisterConcoction extends UnimplementedCard {
  constructor(game) {
    super(game, "Sinister Concoction", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SinisterConcoction;
