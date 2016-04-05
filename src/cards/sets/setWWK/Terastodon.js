"use strict";
const Constants = require ("../../../Constants");
const TerastodonBase = require("../setC14/Terastodon");

class Terastodon extends TerastodonBase {
  constructor(game) {
    super(game, "Terastodon", "Worldwake", "WWK");
  }
}

module.exports = Terastodon;
