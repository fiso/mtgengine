"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtVessel extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Vessel", "Commander 2015", "C15");
  }
}

module.exports = ThoughtVessel;
