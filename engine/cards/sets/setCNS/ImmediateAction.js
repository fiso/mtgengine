"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmediateAction extends UnimplementedCard {
  constructor(game) {
    super(game, "Immediate Action", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ImmediateAction;
