"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtNibbler extends Card {
  constructor(game) {
    super(game, "Thought Nibbler", "Odyssey", "ODY");
  }
}

module.exports = ThoughtNibbler;
