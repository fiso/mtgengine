"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhessianInfiltrator extends UnimplementedCard {
  constructor (game) {
    super(game, "Jhessian Infiltrator", "Shards of Alara", "ALA");
  }
}

module.exports = JhessianInfiltrator;
