"use strict";
const Constants = require ("../../../Constants");
const TerastodonBase = require("../setCMA/Terastodon");

class Terastodon extends TerastodonBase {
  constructor (game) {
    super(game, "Terastodon", "Worldwake", "WWK");
  }
}

module.exports = Terastodon;
