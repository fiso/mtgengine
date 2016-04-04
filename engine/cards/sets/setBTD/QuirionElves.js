"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuirionElves extends Card {
  constructor(game) {
    super(game, "Quirion Elves", "Beatdown Box Set", "BTD");
  }
}

module.exports = QuirionElves;
