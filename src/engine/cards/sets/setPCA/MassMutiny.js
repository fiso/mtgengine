"use strict";
const Constants = require ("../../../Constants");
const MassMutinyBase = require("../setE02/MassMutiny");

class MassMutiny extends MassMutinyBase {
  constructor (game) {
    super(game, "Mass Mutiny", "Planechase Anthology", "PCA");
  }
}

module.exports = MassMutiny;
