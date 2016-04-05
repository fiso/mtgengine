"use strict";
const Constants = require ("../../../Constants");
const RazortoothRatsBase = require("../set6ED/RazortoothRats");

class RazortoothRats extends RazortoothRatsBase {
  constructor(game) {
    super(game, "Razortooth Rats", "Ninth Edition", "9ED");
  }
}

module.exports = RazortoothRats;
