"use strict";
const Constants = require ("../../../Constants");
const LlanowarWastesBase = require("../setORI/LlanowarWastes");

class LlanowarWastes extends LlanowarWastesBase {
  constructor (game) {
    super(game, "Llanowar Wastes", "Magic 2015", "M15");
  }
}

module.exports = LlanowarWastes;
