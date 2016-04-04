"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveConsequences extends Card {
  constructor(game) {
    super(game, "Grave Consequences", "Judgment", "JUD");
  }
}

module.exports = GraveConsequences;
