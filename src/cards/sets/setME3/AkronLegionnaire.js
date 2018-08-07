"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkronLegionnaire extends UnimplementedCard {
  constructor (game) {
    super(game, "Akron Legionnaire", "Masters Edition III", "ME3");
  }
}

module.exports = AkronLegionnaire;
