"use strict";
const Constants = require ("../../../Constants");
const SilkwrapBase = require("../setDTK/Silkwrap");

class Silkwrap extends SilkwrapBase {
  constructor (game) {
    super(game, "Silkwrap", "Magic Online Promos", "PRM");
  }
}

module.exports = Silkwrap;
