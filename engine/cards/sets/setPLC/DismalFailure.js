"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DismalFailure extends UnimplementedCard {
  constructor(game) {
    super(game, "Dismal Failure", "Planar Chaos", "PLC");
  }
}

module.exports = DismalFailure;
