"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtPrison extends Card {
  constructor(game) {
    super(game, "Thought Prison", "Mirrodin", "MRD");
  }
}

module.exports = ThoughtPrison;
