"use strict";
const Constants = require ("../../../Constants");
const JumpBase = require("../setCED/Jump");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "Magic 2010", "M10");
  }
}

module.exports = Jump;
