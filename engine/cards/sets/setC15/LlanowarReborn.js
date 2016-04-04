"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarRebornBase = require("../setARC/LlanowarReborn.js");

class LlanowarReborn extends LlanowarRebornBase {
  constructor(game) {
    super(game, "Llanowar Reborn", "Commander 2015", "C15");
  }
}

module.exports = LlanowarReborn;
