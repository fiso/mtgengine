"use strict";
const Constants = require ("../../../Constants");
const EverAfterBase = require("../setSOI/EverAfter");

class EverAfter extends EverAfterBase {
  constructor (game) {
    super(game, "Ever After", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = EverAfter;
