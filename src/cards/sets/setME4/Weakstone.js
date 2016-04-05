"use strict";
const Constants = require ("../../../Constants");
const WeakstoneBase = require("../setATQ/Weakstone");

class Weakstone extends WeakstoneBase {
  constructor(game) {
    super(game, "Weakstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Weakstone;
