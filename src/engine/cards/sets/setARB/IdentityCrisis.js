"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IdentityCrisis extends UnimplementedCard {
  constructor (game) {
    super(game, "Identity Crisis", "Alara Reborn", "ARB");
  }
}

module.exports = IdentityCrisis;
