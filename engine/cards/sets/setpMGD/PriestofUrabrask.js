"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriestofUrabrask extends Card {
  constructor(game) {
    super(game, "Priest of Urabrask", "Magic Game Day", "pMGD");
  }
}

module.exports = PriestofUrabrask;
