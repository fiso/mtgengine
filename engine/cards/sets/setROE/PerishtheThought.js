"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PerishtheThought extends Card {
  constructor(game) {
    super(game, "Perish the Thought", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PerishtheThought;
