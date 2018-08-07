"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InsufferableSyphon extends UnimplementedCard {
  constructor (game) {
    super(game, "Insufferable Syphon", "Unstable", "UST");
  }
}

module.exports = InsufferableSyphon;
