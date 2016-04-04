"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtDissector extends Card {
  constructor(game) {
    super(game, "Thought Dissector", "Darksteel", "DST");
  }
}

module.exports = ThoughtDissector;
