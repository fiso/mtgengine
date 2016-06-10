"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForsakenSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForsakenSanctuary;
