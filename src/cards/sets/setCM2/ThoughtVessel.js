"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtVessel extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Vessel", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ThoughtVessel;
