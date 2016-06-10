"use strict";
const Constants = require ("../../../Constants");
const LlanowarRebornBase = require("../setARC/LlanowarReborn");

class LlanowarReborn extends LlanowarRebornBase {
  constructor (game) {
    super(game, "Llanowar Reborn", "Commander 2013 Edition", "C13");
  }
}

module.exports = LlanowarReborn;
