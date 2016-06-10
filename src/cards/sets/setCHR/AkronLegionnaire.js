"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkronLegionnaire extends UnimplementedCard {
  constructor (game) {
    super(game, "Akron Legionnaire", "Chronicles", "CHR");
  }
}

module.exports = AkronLegionnaire;
