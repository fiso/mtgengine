"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuspensionField extends UnimplementedCard {
  constructor(game) {
    super(game, "Suspension Field", "Friday Night Magic", "pFNM");
  }
}

module.exports = SuspensionField;
