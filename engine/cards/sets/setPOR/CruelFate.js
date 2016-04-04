"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruelFate extends Card {
  constructor(game) {
    super(game, "Cruel Fate", "Portal", "POR");
  }
}

module.exports = CruelFate;
