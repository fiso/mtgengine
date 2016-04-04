"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SatyrHedonistBase = require("../setDDL/SatyrHedonist.js");

class SatyrHedonist extends SatyrHedonistBase {
  constructor(game) {
    super(game, "Satyr Hedonist", "Theros", "THS");
  }
}

module.exports = SatyrHedonist;
