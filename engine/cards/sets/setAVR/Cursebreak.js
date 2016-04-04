"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cursebreak extends Card {
  constructor(game) {
    super(game, "Cursebreak", "Avacyn Restored", "AVR");
  }
}

module.exports = Cursebreak;
