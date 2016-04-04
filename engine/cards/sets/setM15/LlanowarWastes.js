"use strict";
const Constants = require ("../../../Constants");
const LlanowarWastesBase = require("../setAPC/LlanowarWastes");

class LlanowarWastes extends LlanowarWastesBase {
  constructor(game) {
    super(game, "Llanowar Wastes", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LlanowarWastes;
