"use strict";
const Constants = require ("../../../Constants");
const WeakstoneBase = require("../setME4/Weakstone");

class Weakstone extends WeakstoneBase {
  constructor (game) {
    super(game, "Weakstone", "Antiquities", "ATQ");
  }
}

module.exports = Weakstone;
