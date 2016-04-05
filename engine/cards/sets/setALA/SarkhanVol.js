"use strict";
const Constants = require ("../../../Constants");
const SarkhanVolBase = require("../setMMA/SarkhanVol");

class SarkhanVol extends SarkhanVolBase {
  constructor(game) {
    super(game, "Sarkhan Vol", "Shards of Alara", "ALA");
  }
}

module.exports = SarkhanVol;
