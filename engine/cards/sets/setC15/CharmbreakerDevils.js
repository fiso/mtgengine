"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CharmbreakerDevilsBase = require("../setC13/CharmbreakerDevils.js");

class CharmbreakerDevils extends CharmbreakerDevilsBase {
  constructor(game) {
    super(game, "Charmbreaker Devils", "Commander 2015", "C15");
  }
}

module.exports = CharmbreakerDevils;
