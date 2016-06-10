"use strict";
const Constants = require ("../../../Constants");
const ForkBase = require("../setCED/Fork");

class Fork extends ForkBase {
  constructor (game) {
    super(game, "Fork", "Revised Edition", "3ED");
  }
}

module.exports = Fork;
