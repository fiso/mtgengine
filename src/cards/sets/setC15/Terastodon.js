"use strict";
const Constants = require ("../../../Constants");
const TerastodonBase = require("../setC14/Terastodon");

class Terastodon extends TerastodonBase {
  constructor (game) {
    super(game, "Terastodon", "Commander 2015", "C15");
  }
}

module.exports = Terastodon;
