"use strict";
const Constants = require ("../../../Constants");
const HullBreachBase = require("../setC13/HullBreach");

class HullBreach extends HullBreachBase {
  constructor (game) {
    super(game, "Hull Breach", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HullBreach;
