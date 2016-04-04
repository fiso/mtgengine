"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostinThought extends Card {
  constructor(game) {
    super(game, "Lost in Thought", "Judgment", "JUD");
  }
}

module.exports = LostinThought;
