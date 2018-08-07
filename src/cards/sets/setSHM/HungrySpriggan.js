"use strict";
const Constants = require ("../../../Constants");
const HungrySprigganBase = require("../setMM3/HungrySpriggan");

class HungrySpriggan extends HungrySprigganBase {
  constructor (game) {
    super(game, "Hungry Spriggan", "Shadowmoor", "SHM");
  }
}

module.exports = HungrySpriggan;
