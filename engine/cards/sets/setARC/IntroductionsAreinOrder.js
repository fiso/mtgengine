"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntroductionsAreinOrder extends Card {
  constructor(game) {
    super(game, "Introductions Are in Order", "Archenemy", "ARC");
  }
}

module.exports = IntroductionsAreinOrder;
