"use strict";
const Constants = require ("../../../Constants");
const SleightofMindBase = require("../setCED/SleightofMind");

class SleightofMind extends SleightofMindBase {
  constructor (game) {
    super(game, "Sleight of Mind", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SleightofMind;
