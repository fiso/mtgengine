"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nevermaker extends Card {
  constructor(game) {
    super(game, "Nevermaker", "Morningtide", "MOR");
  }
}

module.exports = Nevermaker;
