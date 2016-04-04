"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdeloththeAncient extends UnimplementedCard {
  constructor(game) {
    super(game, "Verdeloth the Ancient", "Archenemy", "ARC");
  }
}

module.exports = VerdeloththeAncient;
