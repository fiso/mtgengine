"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Where extends Card {
  constructor(game) {
    super(game, "Where", "Unhinged", "UNH");
  }
}

module.exports = Where;
