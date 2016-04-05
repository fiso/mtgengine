"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtPrison extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Prison", "Mirrodin", "MRD");
  }
}

module.exports = ThoughtPrison;
