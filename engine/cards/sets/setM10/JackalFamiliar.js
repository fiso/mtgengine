"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JackalFamiliar extends Card {
  constructor(game) {
    super(game, "Jackal Familiar", "Magic 2010", "M10");
  }
}

module.exports = JackalFamiliar;
