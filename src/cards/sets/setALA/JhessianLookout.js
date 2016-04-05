"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhessianLookout extends UnimplementedCard {
  constructor(game) {
    super(game, "Jhessian Lookout", "Shards of Alara", "ALA");
  }
}

module.exports = JhessianLookout;
