"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrizzlyFate extends UnimplementedCard {
  constructor(game) {
    super(game, "Grizzly Fate", "Judgment", "JUD");
  }
}

module.exports = GrizzlyFate;
