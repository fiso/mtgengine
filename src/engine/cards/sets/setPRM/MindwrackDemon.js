"use strict";
const Constants = require ("../../../Constants");
const MindwrackDemonBase = require("../setSOI/MindwrackDemon");

class MindwrackDemon extends MindwrackDemonBase {
  constructor (game) {
    super(game, "Mindwrack Demon", "Magic Online Promos", "PRM");
  }
}

module.exports = MindwrackDemon;
