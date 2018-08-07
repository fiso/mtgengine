"use strict";
const Constants = require ("../../../Constants");
const ThoughtLashBase = require("../setME2/ThoughtLash");

class ThoughtLash extends ThoughtLashBase {
  constructor (game) {
    super(game, "Thought Lash", "Alliances", "ALL");
  }
}

module.exports = ThoughtLash;
