"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForkBase = require("../setCED/Fork.js");

class Fork extends ForkBase {
  constructor(game) {
    super(game, "Fork", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fork;
