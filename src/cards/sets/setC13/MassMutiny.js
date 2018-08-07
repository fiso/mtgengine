"use strict";
const Constants = require ("../../../Constants");
const MassMutinyBase = require("../setE02/MassMutiny");

class MassMutiny extends MassMutinyBase {
  constructor (game) {
    super(game, "Mass Mutiny", "Commander 2013", "C13");
  }
}

module.exports = MassMutiny;
