"use strict";
const Constants = require ("../../../Constants");
const JumpBase = require("../setCED/Jump");

class Jump extends JumpBase {
  constructor (game) {
    super(game, "Jump", "Revised Edition", "3ED");
  }
}

module.exports = Jump;
