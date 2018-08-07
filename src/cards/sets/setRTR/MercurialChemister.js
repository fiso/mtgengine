"use strict";
const Constants = require ("../../../Constants");
const MercurialChemisterBase = require("../setC17/MercurialChemister");

class MercurialChemister extends MercurialChemisterBase {
  constructor (game) {
    super(game, "Mercurial Chemister", "Return to Ravnica", "RTR");
  }
}

module.exports = MercurialChemister;
