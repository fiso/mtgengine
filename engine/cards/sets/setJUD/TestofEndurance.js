"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TestofEndurance extends Card {
  constructor(game) {
    super(game, "Test of Endurance", "Judgment", "JUD");
  }
}

module.exports = TestofEndurance;
