"use strict";
const Constants = require ("../../../Constants");
const SliverBase = require("../setTM15/Sliver");

class Sliver extends SliverBase {
  constructor (game) {
    super(game, "Sliver", "League Tokens 2013", "L13");
  }
}

module.exports = Sliver;
