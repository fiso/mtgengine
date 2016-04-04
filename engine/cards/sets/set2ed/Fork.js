"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor(game) {
    super(game, "Fork", "Unlimited Edition", "2ED");
  }
}

module.exports = Fork;
