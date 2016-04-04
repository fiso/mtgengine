"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CircleofFlame extends Card {
  constructor(game) {
    super(game, "Circle of Flame", "Magic 2012", "M12");
  }
}

module.exports = CircleofFlame;
