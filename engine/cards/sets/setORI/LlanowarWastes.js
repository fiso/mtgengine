"use strict";
const Constants = require ("../../../Constants");
const LlanowarWastesBase = require("../setAPC/LlanowarWastes");

class LlanowarWastes extends LlanowarWastesBase {
  constructor(game) {
    super(game, "Llanowar Wastes", "Magic Origins", "ORI");
  }
}

module.exports = LlanowarWastes;
