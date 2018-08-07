"use strict";
const Constants = require ("../../../Constants");
const JhoiraoftheGhituBase = require("../setDDS/JhoiraoftheGhitu");

class JhoiraoftheGhitu extends JhoiraoftheGhituBase {
  constructor (game) {
    super(game, "Jhoira of the Ghitu", "You Make the Cube", "PZ2");
  }
}

module.exports = JhoiraoftheGhitu;
