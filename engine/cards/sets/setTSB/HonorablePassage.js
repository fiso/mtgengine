"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorablePassage extends UnimplementedCard {
  constructor(game) {
    super(game, "Honorable Passage", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = HonorablePassage;
