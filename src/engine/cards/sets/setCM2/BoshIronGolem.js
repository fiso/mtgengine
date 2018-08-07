"use strict";
const Constants = require ("../../../Constants");
const BoshIronGolemBase = require("../setC18/BoshIronGolem");

class BoshIronGolem extends BoshIronGolemBase {
  constructor (game) {
    super(game, "Bosh, Iron Golem", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BoshIronGolem;
