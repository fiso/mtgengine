"use strict";
const Constants = require ("../../../Constants");
const TerastodonBase = require("../setCMA/Terastodon");

class Terastodon extends TerastodonBase {
  constructor (game) {
    super(game, "Terastodon", "Commander 2014", "C14");
  }
}

module.exports = Terastodon;
