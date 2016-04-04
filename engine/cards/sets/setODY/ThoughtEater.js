"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtEater extends Card {
  constructor(game) {
    super(game, "Thought Eater", "Odyssey", "ODY");
  }
}

module.exports = ThoughtEater;
