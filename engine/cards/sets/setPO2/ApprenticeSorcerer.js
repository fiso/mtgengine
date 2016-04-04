"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ApprenticeSorcerer extends Card {
  constructor(game) {
    super(game, "Apprentice Sorcerer", "Portal Second Age", "PO2");
  }
}

module.exports = ApprenticeSorcerer;
