"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtDissector extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Dissector", "Darksteel", "DST");
  }
}

module.exports = ThoughtDissector;
