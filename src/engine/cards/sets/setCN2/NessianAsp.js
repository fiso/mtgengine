"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NessianAsp extends UnimplementedCard {
  constructor (game) {
    super(game, "Nessian Asp", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = NessianAsp;
