"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JumpBase = require("../setCED/Jump.js");

class Jump extends JumpBase {
  constructor(game) {
    super(game, "Jump", "Unlimited Edition", "2ED");
  }
}

module.exports = Jump;
