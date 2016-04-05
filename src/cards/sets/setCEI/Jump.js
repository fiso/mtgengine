"use strict";
const Constants = require ("../../../Constants");
const JumpBase = require("../setCED/Jump");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "International Collector's Edition", "CEI");
  }
}

module.exports = Jump;
