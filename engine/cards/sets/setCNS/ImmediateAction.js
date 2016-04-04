"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmediateAction extends Card {
  constructor(game) {
    super(game, "Immediate Action", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ImmediateAction;
