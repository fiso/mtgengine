"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrustedAdvisor extends Card {
  constructor(game) {
    super(game, "Trusted Advisor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = TrustedAdvisor;
