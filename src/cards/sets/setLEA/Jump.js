"use strict";
const Constants = require ("../../../Constants");
const JumpBase = require("../setCED/Jump");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Jump;
