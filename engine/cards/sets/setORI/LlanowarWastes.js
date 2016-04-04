"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarWastesBase = require("../setAPC/LlanowarWastes.js");

class LlanowarWastes extends LlanowarWastesBase {
  constructor(game) {
    super(game, "Llanowar Wastes", "Magic Origins", "ORI");
  }
}

module.exports = LlanowarWastes;
