"use strict";
const Constants = require ("../../../Constants");
const AuntiesSnitchBase = require("../setMMA/AuntiesSnitch");

class AuntiesSnitch extends AuntiesSnitchBase {
  constructor(game) {
    super(game, "Auntie's Snitch", "Morningtide", "MOR");
  }
}

module.exports = AuntiesSnitch;
