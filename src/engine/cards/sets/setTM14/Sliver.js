"use strict";
const Constants = require ("../../../Constants");
const SliverBase = require("../setTM15/Sliver");

class Sliver extends SliverBase {
  constructor (game) {
    super(game, "Sliver", "Magic 2014 Tokens", "TM14");
  }
}

module.exports = Sliver;
