"use strict";
const Constants = require ("../../../Constants");
const ElkinBottleBase = require("../setME2/ElkinBottle");

class ElkinBottle extends ElkinBottleBase {
  constructor (game) {
    super(game, "Elkin Bottle", "Deckmasters", "DKM");
  }
}

module.exports = ElkinBottle;
