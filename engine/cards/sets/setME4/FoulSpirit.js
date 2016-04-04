"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulSpirit extends Card {
  constructor(game) {
    super(game, "Foul Spirit", "Masters Edition IV", "ME4");
  }
}

module.exports = FoulSpirit;
