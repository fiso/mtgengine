"use strict";
const Constants = require ("../../../Constants");
const SandsteppeMastodonBase = require("../setFRF/SandsteppeMastodon");

class SandsteppeMastodon extends SandsteppeMastodonBase {
  constructor (game) {
    super(game, "Sandsteppe Mastodon", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = SandsteppeMastodon;
