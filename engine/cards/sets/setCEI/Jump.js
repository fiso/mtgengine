"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JumpBase = require("../setCED/Jump.js");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "International Collector's Edition", "CEI");
  }
}

module.exports = Jump;
