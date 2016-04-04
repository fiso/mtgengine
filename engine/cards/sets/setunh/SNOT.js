"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SNOT extends Card {
  constructor(game) {
    super(game, "S.N.O.T.", "Unhinged", "UNH");
  }
}

module.exports = SNOT;
