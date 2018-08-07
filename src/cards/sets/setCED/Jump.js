"use strict";
const Constants = require ("../../../Constants");
const JumpBase = require("../setM10/Jump");

class Jump extends JumpBase {
  constructor (game) {
    super(game, "Jump", "Collectors’ Edition", "CED");
  }
}

module.exports = Jump;
