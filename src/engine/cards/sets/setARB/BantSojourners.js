"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantSojourners extends UnimplementedCard {
  constructor (game) {
    super(game, "Bant Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = BantSojourners;
