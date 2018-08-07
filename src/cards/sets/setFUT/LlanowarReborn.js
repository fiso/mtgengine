"use strict";
const Constants = require ("../../../Constants");
const LlanowarRebornBase = require("../setC15/LlanowarReborn");

class LlanowarReborn extends LlanowarRebornBase {
  constructor (game) {
    super(game, "Llanowar Reborn", "Future Sight", "FUT");
  }
}

module.exports = LlanowarReborn;
