"use strict";
const Constants = require ("../../../Constants");
const LlanowarWastesBase = require("../setORI/LlanowarWastes");

class LlanowarWastes extends LlanowarWastesBase {
  constructor (game) {
    super(game, "Llanowar Wastes", "World Championship Decks 2001", "WC01");
  }
}

module.exports = LlanowarWastes;
