"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntroductionsAreinOrder extends UnimplementedCard {
  constructor(game) {
    super(game, "Introductions Are in Order", "Archenemy", "ARC");
  }
}

module.exports = IntroductionsAreinOrder;
