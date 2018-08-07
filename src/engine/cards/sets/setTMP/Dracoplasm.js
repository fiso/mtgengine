"use strict";
const Constants = require ("../../../Constants");
const DracoplasmBase = require("../setTPR/Dracoplasm");

class Dracoplasm extends DracoplasmBase {
  constructor (game) {
    super(game, "Dracoplasm", "Tempest", "TMP");
  }
}

module.exports = Dracoplasm;
