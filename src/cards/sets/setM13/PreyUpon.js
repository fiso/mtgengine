"use strict";
const Constants = require ("../../../Constants");
const PreyUponBase = require("../setDDL/PreyUpon");

class PreyUpon extends PreyUponBase {
  constructor (game) {
    super(game, "Prey Upon", "Magic 2013", "M13");
  }
}

module.exports = PreyUpon;
