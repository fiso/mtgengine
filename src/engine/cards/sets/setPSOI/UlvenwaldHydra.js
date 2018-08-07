"use strict";
const Constants = require ("../../../Constants");
const UlvenwaldHydraBase = require("../setSOI/UlvenwaldHydra");

class UlvenwaldHydra extends UlvenwaldHydraBase {
  constructor (game) {
    super(game, "Ulvenwald Hydra", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = UlvenwaldHydra;
