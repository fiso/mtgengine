"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedThopter extends UnimplementedCard {
  constructor(game) {
    super(game, "Spined Thopter", "New Phyrexia", "NPH");
  }
}

module.exports = SpinedThopter;
