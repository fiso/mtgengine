"use strict";
const Constants = require ("../../../Constants");
const RelentlessDeadBase = require("../setSOI/RelentlessDead");

class RelentlessDead extends RelentlessDeadBase {
  constructor (game) {
    super(game, "Relentless Dead", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = RelentlessDead;
