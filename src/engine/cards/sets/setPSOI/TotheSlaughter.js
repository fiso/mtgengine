"use strict";
const Constants = require ("../../../Constants");
const TotheSlaughterBase = require("../setSOI/TotheSlaughter");

class TotheSlaughter extends TotheSlaughterBase {
  constructor (game) {
    super(game, "To the Slaughter", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = TotheSlaughter;
