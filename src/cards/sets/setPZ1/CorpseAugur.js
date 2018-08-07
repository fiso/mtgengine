"use strict";
const Constants = require ("../../../Constants");
const CorpseAugurBase = require("../setC17/CorpseAugur");

class CorpseAugur extends CorpseAugurBase {
  constructor (game) {
    super(game, "Corpse Augur", "Legendary Cube", "PZ1");
  }
}

module.exports = CorpseAugur;
