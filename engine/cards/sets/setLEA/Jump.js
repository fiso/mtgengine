"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JumpBase = require("../setCED/Jump.js");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Jump;
