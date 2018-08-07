"use strict";
const Constants = require ("../../../Constants");
const CorpseAugurBase = require("../setC17/CorpseAugur");

class CorpseAugur extends CorpseAugurBase {
  constructor (game) {
    super(game, "Corpse Augur", "Commander Anthology", "CMA");
  }
}

module.exports = CorpseAugur;
