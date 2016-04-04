"use strict";
const Constants = require ("../../../Constants");
const WallofReverenceBase = require("../setC13/WallofReverence");

class WallofReverence extends WallofReverenceBase {
  constructor(game) {
    super(game, "Wall of Reverence", "Conflux", "CON");
  }
}

module.exports = WallofReverence;
