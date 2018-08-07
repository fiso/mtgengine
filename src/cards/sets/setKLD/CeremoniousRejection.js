"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeremoniousRejection extends UnimplementedCard {
  constructor (game) {
    super(game, "Ceremonious Rejection", "Kaladesh", "KLD");
  }
}

module.exports = CeremoniousRejection;
