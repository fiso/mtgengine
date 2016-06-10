"use strict";
const Constants = require ("../../../Constants");
const ThoughtLashBase = require("../setALL/ThoughtLash");

class ThoughtLash extends ThoughtLashBase {
  constructor (game) {
    super(game, "Thought Lash", "Masters Edition II", "ME2");
  }
}

module.exports = ThoughtLash;
