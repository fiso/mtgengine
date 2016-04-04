"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhessianInfiltrator extends Card {
  constructor(game) {
    super(game, "Jhessian Infiltrator", "Shards of Alara", "ALA");
  }
}

module.exports = JhessianInfiltrator;
