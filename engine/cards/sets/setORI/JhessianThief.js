"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhessianThief extends Card {
  constructor(game) {
    super(game, "Jhessian Thief", "Magic Origins", "ORI");
  }
}

module.exports = JhessianThief;
