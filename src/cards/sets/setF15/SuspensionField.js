"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuspensionField extends UnimplementedCard {
  constructor (game) {
    super(game, "Suspension Field", "Friday Night Magic 2015", "F15");
  }
}

module.exports = SuspensionField;
