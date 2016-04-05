"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Courier", "Fifth Dawn", "5DN");
  }
}

module.exports = ThoughtCourier;
