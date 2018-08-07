"use strict";
const Constants = require ("../../../Constants");
const DeathBaronBase = require("../setM19/DeathBaron");

class DeathBaron extends DeathBaronBase {
  constructor (game) {
    super(game, "Death Baron", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = DeathBaron;
