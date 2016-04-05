"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemporalManipulation extends UnimplementedCard {
  constructor(game) {
    super(game, "Temporal Manipulation", "Masters Edition II", "ME2");
  }
}

module.exports = TemporalManipulation;
