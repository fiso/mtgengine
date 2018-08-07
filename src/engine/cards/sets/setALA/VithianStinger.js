"use strict";
const Constants = require ("../../../Constants");
const VithianStingerBase = require("../setMM3/VithianStinger");

class VithianStinger extends VithianStingerBase {
  constructor (game) {
    super(game, "Vithian Stinger", "Shards of Alara", "ALA");
  }
}

module.exports = VithianStinger;
