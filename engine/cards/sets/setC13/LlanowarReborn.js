"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarRebornBase = require("../setARC/LlanowarReborn.js");

class LlanowarReborn extends LlanowarRebornBase {
  constructor(game) {
    super(game, "Llanowar Reborn", "Commander 2013 Edition", "C13");
  }
}

module.exports = LlanowarReborn;
