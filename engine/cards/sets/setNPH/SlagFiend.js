"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlagFiend extends Card {
  constructor(game) {
    super(game, "Slag Fiend", "New Phyrexia", "NPH");
  }
}

module.exports = SlagFiend;
