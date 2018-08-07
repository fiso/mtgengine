"use strict";
const Constants = require ("../../../Constants");
const ScavengerGroundsBase = require("../setHOU/ScavengerGrounds");

class ScavengerGrounds extends ScavengerGroundsBase {
  constructor (game) {
    super(game, "Scavenger Grounds", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ScavengerGrounds;
