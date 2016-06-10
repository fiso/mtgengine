"use strict";
const Constants = require ("../../../Constants");
const ObeliskofJundBase = require("../setC13/ObeliskofJund");

class ObeliskofJund extends ObeliskofJundBase {
  constructor (game) {
    super(game, "Obelisk of Jund", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofJund;
