"use strict";
const Constants = require ("../../../Constants");
const BygoneBishopBase = require("../setSOI/BygoneBishop");

class BygoneBishop extends BygoneBishopBase {
  constructor (game) {
    super(game, "Bygone Bishop", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = BygoneBishop;
