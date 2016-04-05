"use strict";
const Constants = require ("../../../Constants");
const ElkinBottleBase = require("../setDKM/ElkinBottle");

class ElkinBottle extends ElkinBottleBase {
  constructor(game) {
    super(game, "Elkin Bottle", "Ice Age", "ICE");
  }
}

module.exports = ElkinBottle;
