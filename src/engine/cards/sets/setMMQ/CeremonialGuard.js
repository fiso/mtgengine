"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeremonialGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Ceremonial Guard", "Mercadian Masques", "MMQ");
  }
}

module.exports = CeremonialGuard;
