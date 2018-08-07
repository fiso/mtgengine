"use strict";
const Constants = require ("../../../Constants");
const DeathBaronBase = require("../setM19/DeathBaron");

class DeathBaron extends DeathBaronBase {
  constructor (game) {
    super(game, "Death Baron", "Magic Online Promos", "PRM");
  }
}

module.exports = DeathBaron;
