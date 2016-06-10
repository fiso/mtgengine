"use strict";
const Constants = require ("../../../Constants");
const DracoplasmBase = require("../setTMP/Dracoplasm");

class Dracoplasm extends DracoplasmBase {
  constructor (game) {
    super(game, "Dracoplasm", "Tempest Remastered", "TPR");
  }
}

module.exports = Dracoplasm;
