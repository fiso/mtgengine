"use strict";
const Constants = require ("../../../Constants");
const SmolderingSpiresBase = require("../setE01/SmolderingSpires");

class SmolderingSpires extends SmolderingSpiresBase {
  constructor (game) {
    super(game, "Smoldering Spires", "Worldwake", "WWK");
  }
}

module.exports = SmolderingSpires;
