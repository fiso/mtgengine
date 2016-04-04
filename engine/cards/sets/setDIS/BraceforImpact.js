"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BraceforImpact extends Card {
  constructor(game) {
    super(game, "Brace for Impact", "Dissension", "DIS");
  }
}

module.exports = BraceforImpact;
