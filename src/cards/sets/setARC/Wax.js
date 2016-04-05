"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wax extends UnimplementedCard {
  constructor(game) {
    super(game, "Wax", "Archenemy", "ARC");
  }
}

module.exports = Wax;
