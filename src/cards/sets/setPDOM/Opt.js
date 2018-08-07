"use strict";
const Constants = require ("../../../Constants");
const OptBase = require("../setDOM/Opt");

class Opt extends OptBase {
  constructor (game) {
    super(game, "Opt", "Dominaria Promos", "PDOM");
  }
}

module.exports = Opt;
