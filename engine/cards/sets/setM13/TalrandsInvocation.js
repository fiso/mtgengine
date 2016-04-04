"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalrandsInvocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Talrand's Invocation", "Magic 2013", "M13");
  }
}

module.exports = TalrandsInvocation;
