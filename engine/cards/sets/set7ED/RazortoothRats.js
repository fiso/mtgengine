"use strict";
const Constants = require ("../../../Constants");
const RazortoothRatsBase = require("../set6ED/RazortoothRats");

class RazortoothRats extends RazortoothRatsBase {
  constructor(game) {
    super(game, "Razortooth Rats", "Seventh Edition", "7ED");
  }
}

module.exports = RazortoothRats;
