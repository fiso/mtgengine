"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraceforImpact extends UnimplementedCard {
  constructor(game) {
    super(game, "Brace for Impact", "Dissension", "DIS");
  }
}

module.exports = BraceforImpact;
