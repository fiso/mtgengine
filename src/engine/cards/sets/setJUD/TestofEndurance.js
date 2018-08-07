"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TestofEndurance extends UnimplementedCard {
  constructor (game) {
    super(game, "Test of Endurance", "Judgment", "JUD");
  }
}

module.exports = TestofEndurance;
