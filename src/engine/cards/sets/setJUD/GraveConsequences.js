"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveConsequences extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Consequences", "Judgment", "JUD");
  }
}

module.exports = GraveConsequences;
