"use strict";
const Constants = require ("../../../Constants");
const SigilBlessingBase = require("../setMM2/SigilBlessing");

class SigilBlessing extends SigilBlessingBase {
  constructor (game) {
    super(game, "Sigil Blessing", "Shards of Alara", "ALA");
  }
}

module.exports = SigilBlessing;
