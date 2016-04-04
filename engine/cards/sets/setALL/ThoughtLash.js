"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtLash extends Card {
  constructor(game) {
    super(game, "Thought Lash", "Alliances", "ALL");
  }
}

module.exports = ThoughtLash;
