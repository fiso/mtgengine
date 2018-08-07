"use strict";
const Constants = require ("../../../Constants");
const BoshIronGolemBase = require("../setC18/BoshIronGolem");

class BoshIronGolem extends BoshIronGolemBase {
  constructor (game) {
    super(game, "Bosh, Iron Golem", "Commander 2014", "C14");
  }
}

module.exports = BoshIronGolem;
