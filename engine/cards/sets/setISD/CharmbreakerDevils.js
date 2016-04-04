"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CharmbreakerDevilsBase = require("../setC13/CharmbreakerDevils.js");

class CharmbreakerDevils extends CharmbreakerDevilsBase {
  constructor(game) {
    super(game, "Charmbreaker Devils", "Innistrad", "ISD");
  }
}

module.exports = CharmbreakerDevils;
