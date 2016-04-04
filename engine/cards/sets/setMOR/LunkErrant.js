"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LunkErrant extends Card {
  constructor(game) {
    super(game, "Lunk Errant", "Morningtide", "MOR");
  }
}

module.exports = LunkErrant;
