"use strict";
const Constants = require ("../../../Constants");
const SatyrHedonistBase = require("../setDDL/SatyrHedonist");

class SatyrHedonist extends SatyrHedonistBase {
  constructor(game) {
    super(game, "Satyr Hedonist", "Theros", "THS");
  }
}

module.exports = SatyrHedonist;
