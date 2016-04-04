"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ActofAggressionBase = require("../setC15/ActofAggression.js");

class ActofAggression extends ActofAggressionBase {
  constructor(game) {
    super(game, "Act of Aggression", "New Phyrexia", "NPH");
  }
}

module.exports = ActofAggression;
