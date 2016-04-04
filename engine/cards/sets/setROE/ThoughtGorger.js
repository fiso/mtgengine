"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtGorger extends Card {
  constructor(game) {
    super(game, "Thought Gorger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ThoughtGorger;
