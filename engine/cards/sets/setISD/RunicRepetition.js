"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunicRepetition extends Card {
  constructor(game) {
    super(game, "Runic Repetition", "Innistrad", "ISD");
  }
}

module.exports = RunicRepetition;
