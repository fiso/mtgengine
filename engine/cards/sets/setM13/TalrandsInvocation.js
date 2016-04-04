"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalrandsInvocation extends Card {
  constructor(game) {
    super(game, "Talrand's Invocation", "Magic 2013", "M13");
  }
}

module.exports = TalrandsInvocation;
