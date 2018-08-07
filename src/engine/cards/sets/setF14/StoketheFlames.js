"use strict";
const Constants = require ("../../../Constants");
const StoketheFlamesBase = require("../setM15/StoketheFlames");

class StoketheFlames extends StoketheFlamesBase {
  constructor (game) {
    super(game, "Stoke the Flames", "Friday Night Magic 2014", "F14");
  }
}

module.exports = StoketheFlames;
