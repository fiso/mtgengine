"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonstrousCarabid extends UnimplementedCard {
  constructor (game) {
    super(game, "Monstrous Carabid", "Alara Reborn", "ARB");
  }
}

module.exports = MonstrousCarabid;
