"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickerboughElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Wickerbough Elder", "Archenemy", "ARC");
  }
}

module.exports = WickerboughElder;
