"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhessianLookout extends Card {
  constructor(game) {
    super(game, "Jhessian Lookout", "Shards of Alara", "ALA");
  }
}

module.exports = JhessianLookout;
