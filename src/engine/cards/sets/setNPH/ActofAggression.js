"use strict";
const Constants = require ("../../../Constants");
const ActofAggressionBase = require("../setC15/ActofAggression");

class ActofAggression extends ActofAggressionBase {
  constructor (game) {
    super(game, "Act of Aggression", "New Phyrexia", "NPH");
  }
}

module.exports = ActofAggression;
