"use strict";
const Constants = require ("../../../Constants");
const MordantDragonBase = require("../setDDG/MordantDragon");

class MordantDragon extends MordantDragonBase {
  constructor (game) {
    super(game, "Mordant Dragon", "Worldwake", "WWK");
  }
}

module.exports = MordantDragon;
