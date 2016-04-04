"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoshIronGolemBase = require("../setC14/BoshIronGolem.js");

class BoshIronGolem extends BoshIronGolemBase {
  constructor(game) {
    super(game, "Bosh, Iron Golem", "Mirrodin", "MRD");
  }
}

module.exports = BoshIronGolem;
