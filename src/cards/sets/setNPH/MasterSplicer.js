"use strict";
const Constants = require ("../../../Constants");
const MasterSplicerBase = require("../setMM3/MasterSplicer");

class MasterSplicer extends MasterSplicerBase {
  constructor (game) {
    super(game, "Master Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = MasterSplicer;
