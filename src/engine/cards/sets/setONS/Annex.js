"use strict";
const Constants = require ("../../../Constants");
const AnnexBase = require("../set9ED/Annex");

class Annex extends AnnexBase {
  constructor (game) {
    super(game, "Annex", "Onslaught", "ONS");
  }
}

module.exports = Annex;
