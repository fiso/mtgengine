"use strict";
const Constants = require ("../../../Constants");
const HullBreachBase = require("../setPZ1/HullBreach");

class HullBreach extends HullBreachBase {
  constructor (game) {
    super(game, "Hull Breach", "Commander 2011", "CMD");
  }
}

module.exports = HullBreach;
