"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThespiansStage extends Card {
  constructor(game) {
    super(game, "Thespian's Stage", "Gatecrash", "GTC");
  }
}

module.exports = ThespiansStage;
