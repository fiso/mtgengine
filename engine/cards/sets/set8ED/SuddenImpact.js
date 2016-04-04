"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenImpact extends Card {
  constructor(game) {
    super(game, "Sudden Impact", "Eighth Edition", "8ED");
  }
}

module.exports = SuddenImpact;
