"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DismalFailure extends Card {
  constructor(game) {
    super(game, "Dismal Failure", "Planar Chaos", "PLC");
  }
}

module.exports = DismalFailure;
