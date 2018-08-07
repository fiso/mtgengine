"use strict";
const Constants = require ("../../../Constants");
const ObNixilisReignitedBase = require("../setDDR/ObNixilisReignited");

class ObNixilisReignited extends ObNixilisReignitedBase {
  constructor (game) {
    super(game, "Ob Nixilis Reignited", "Magic Online Promos", "PRM");
  }
}

module.exports = ObNixilisReignited;
