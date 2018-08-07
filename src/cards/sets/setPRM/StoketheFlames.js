"use strict";
const Constants = require ("../../../Constants");
const StoketheFlamesBase = require("../setM15/StoketheFlames");

class StoketheFlames extends StoketheFlamesBase {
  constructor (game) {
    super(game, "Stoke the Flames", "Magic Online Promos", "PRM");
  }
}

module.exports = StoketheFlames;
