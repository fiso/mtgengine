"use strict";
const Constants = require ("../../../Constants");
const LlanowarWastesBase = require("../setORI/LlanowarWastes");

class LlanowarWastes extends LlanowarWastesBase {
  constructor (game) {
    super(game, "Llanowar Wastes", "Ninth Edition", "9ED");
  }
}

module.exports = LlanowarWastes;
