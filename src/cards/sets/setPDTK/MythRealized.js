"use strict";
const Constants = require ("../../../Constants");
const MythRealizedBase = require("../setDTK/MythRealized");

class MythRealized extends MythRealizedBase {
  constructor (game) {
    super(game, "Myth Realized", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = MythRealized;
