"use strict";
const Constants = require ("../../../Constants");
const MassMutinyBase = require("../setE02/MassMutiny");

class MassMutiny extends MassMutinyBase {
  constructor (game) {
    super(game, "Mass Mutiny", "Planechase 2012", "PC2");
  }
}

module.exports = MassMutiny;
