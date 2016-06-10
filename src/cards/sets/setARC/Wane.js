"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wane extends UnimplementedCard {
  constructor (game) {
    super(game, "Wane", "Archenemy", "ARC");
  }
}

module.exports = Wane;
