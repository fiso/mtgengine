"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonorablePassage extends Card {
  constructor(game) {
    super(game, "Honorable Passage", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = HonorablePassage;
