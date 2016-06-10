"use strict";
const Constants = require ("../../../Constants");
const SigilBlessingBase = require("../setDDG/SigilBlessing");

class SigilBlessing extends SigilBlessingBase {
  constructor (game) {
    super(game, "Sigil Blessing", "Shards of Alara", "ALA");
  }
}

module.exports = SigilBlessing;
