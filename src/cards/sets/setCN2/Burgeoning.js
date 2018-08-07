"use strict";
const Constants = require ("../../../Constants");
const BurgeoningBase = require("../setC16/Burgeoning");

class Burgeoning extends BurgeoningBase {
  constructor (game) {
    super(game, "Burgeoning", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Burgeoning;
