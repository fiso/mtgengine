"use strict";
const Constants = require ("../../../Constants");
const BoshIronGolemBase = require("../setC18/BoshIronGolem");

class BoshIronGolem extends BoshIronGolemBase {
  constructor (game) {
    super(game, "Bosh, Iron Golem", "Mirrodin", "MRD");
  }
}

module.exports = BoshIronGolem;
