"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistAllegiance extends UnimplementedCard {
  constructor(game) {
    super(game, "Twist Allegiance", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TwistAllegiance;
