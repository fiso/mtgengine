"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtCourier extends Card {
  constructor(game) {
    super(game, "Thought Courier", "Fifth Dawn", "5DN");
  }
}

module.exports = ThoughtCourier;
