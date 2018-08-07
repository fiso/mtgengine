"use strict";
const Constants = require ("../../../Constants");
const RangerofEosBase = require("../setMM3/RangerofEos");

class RangerofEos extends RangerofEosBase {
  constructor (game) {
    super(game, "Ranger of Eos", "Shards of Alara", "ALA");
  }
}

module.exports = RangerofEos;
