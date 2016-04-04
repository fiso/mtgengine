"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Quirion Elves", "Beatdown Box Set", "BTD");
  }
}

module.exports = QuirionElves;
