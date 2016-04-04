"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigilBlessingBase = require("../setDDG/SigilBlessing.js");

class SigilBlessing extends SigilBlessingBase {
  constructor(game) {
    super(game, "Sigil Blessing", "Shards of Alara", "ALA");
  }
}

module.exports = SigilBlessing;
