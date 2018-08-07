"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtHemorrhage extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Hemorrhage", "Alara Reborn", "ARB");
  }
}

module.exports = ThoughtHemorrhage;
