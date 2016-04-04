"use strict";
const Constants = require ("../../../Constants");
const MindwrackDemonBase = require("../setDDQ/MindwrackDemon");

class MindwrackDemon extends MindwrackDemonBase {
  constructor(game) {
    super(game, "Mindwrack Demon", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MindwrackDemon;
