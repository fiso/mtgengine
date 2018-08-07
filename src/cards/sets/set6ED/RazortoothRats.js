"use strict";
const Constants = require ("../../../Constants");
const RazortoothRatsBase = require("../set9ED/RazortoothRats");

class RazortoothRats extends RazortoothRatsBase {
  constructor (game) {
    super(game, "Razortooth Rats", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RazortoothRats;
