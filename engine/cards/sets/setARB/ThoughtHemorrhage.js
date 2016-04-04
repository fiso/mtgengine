"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtHemorrhage extends Card {
  constructor(game) {
    super(game, "Thought Hemorrhage", "Alara Reborn", "ARB");
  }
}

module.exports = ThoughtHemorrhage;
