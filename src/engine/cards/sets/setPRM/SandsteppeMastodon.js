"use strict";
const Constants = require ("../../../Constants");
const SandsteppeMastodonBase = require("../setFRF/SandsteppeMastodon");

class SandsteppeMastodon extends SandsteppeMastodonBase {
  constructor (game) {
    super(game, "Sandsteppe Mastodon", "Magic Online Promos", "PRM");
  }
}

module.exports = SandsteppeMastodon;
