"use strict";
const Constants = require ("../../../Constants");
const MindwrackDemonBase = require("../setSOI/MindwrackDemon");

class MindwrackDemon extends MindwrackDemonBase {
  constructor (game) {
    super(game, "Mindwrack Demon", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = MindwrackDemon;
