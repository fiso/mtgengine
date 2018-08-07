"use strict";
const Constants = require ("../../../Constants");
const CorpseAugurBase = require("../setC17/CorpseAugur");

class CorpseAugur extends CorpseAugurBase {
  constructor (game) {
    super(game, "Corpse Augur", "Commander 2015", "C15");
  }
}

module.exports = CorpseAugur;
