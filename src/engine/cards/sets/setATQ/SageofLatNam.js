"use strict";
const Constants = require ("../../../Constants");
const SageofLatNamBase = require("../setDOM/SageofLatNam");

class SageofLatNam extends SageofLatNamBase {
  constructor (game) {
    super(game, "Sage of Lat-Nam", "Antiquities", "ATQ");
  }
}

module.exports = SageofLatNam;
