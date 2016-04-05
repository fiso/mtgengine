"use strict";
const Constants = require ("../../../Constants");
const SageofLatNamBase = require("../setATQ/SageofLatNam");

class SageofLatNam extends SageofLatNamBase {
  constructor(game) {
    super(game, "Sage of Lat-Nam", "Eighth Edition", "8ED");
  }
}

module.exports = SageofLatNam;
