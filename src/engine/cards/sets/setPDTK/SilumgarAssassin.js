"use strict";
const Constants = require ("../../../Constants");
const SilumgarAssassinBase = require("../setDTK/SilumgarAssassin");

class SilumgarAssassin extends SilumgarAssassinBase {
  constructor (game) {
    super(game, "Silumgar Assassin", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = SilumgarAssassin;
