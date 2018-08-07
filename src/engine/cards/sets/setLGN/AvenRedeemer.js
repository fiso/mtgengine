"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenRedeemer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Redeemer", "Legions", "LGN");
  }
}

module.exports = AvenRedeemer;
