"use strict";
const Constants = require ("../../../Constants");
const OptBase = require("../setDOM/Opt");

class Opt extends OptBase {
  constructor (game) {
    super(game, "Opt", "Magic Online Promos", "PRM");
  }
}

module.exports = Opt;
