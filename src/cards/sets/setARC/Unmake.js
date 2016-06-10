"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unmake extends UnimplementedCard {
  constructor (game) {
    super(game, "Unmake", "Archenemy", "ARC");
  }
}

module.exports = Unmake;
