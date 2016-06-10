"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CircleofFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Circle of Flame", "Magic 2012", "M12");
  }
}

module.exports = CircleofFlame;
