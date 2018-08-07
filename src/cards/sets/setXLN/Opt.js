"use strict";
const Constants = require ("../../../Constants");
const OptBase = require("../setDOM/Opt");

class Opt extends OptBase {
  constructor (game) {
    super(game, "Opt", "Ixalan", "XLN");
  }
}

module.exports = Opt;
