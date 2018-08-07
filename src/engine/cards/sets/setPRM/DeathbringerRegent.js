"use strict";
const Constants = require ("../../../Constants");
const DeathbringerRegentBase = require("../setC17/DeathbringerRegent");

class DeathbringerRegent extends DeathbringerRegentBase {
  constructor (game) {
    super(game, "Deathbringer Regent", "Magic Online Promos", "PRM");
  }
}

module.exports = DeathbringerRegent;
