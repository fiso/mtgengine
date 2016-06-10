"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanVerge extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Verge", "Archenemy", "ARC");
  }
}

module.exports = KrosanVerge;
