"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncrementalBlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Incremental Blight", "Archenemy", "ARC");
  }
}

module.exports = IncrementalBlight;
