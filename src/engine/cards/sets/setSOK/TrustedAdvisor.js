"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrustedAdvisor extends UnimplementedCard {
  constructor (game) {
    super(game, "Trusted Advisor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = TrustedAdvisor;
