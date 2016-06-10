"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Gorger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ThoughtGorger;
