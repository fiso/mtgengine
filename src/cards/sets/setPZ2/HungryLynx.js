"use strict";
const Constants = require ("../../../Constants");
const HungryLynxBase = require("../setC17/HungryLynx");

class HungryLynx extends HungryLynxBase {
  constructor (game) {
    super(game, "Hungry Lynx", "You Make the Cube", "PZ2");
  }
}

module.exports = HungryLynx;
