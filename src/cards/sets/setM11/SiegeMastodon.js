"use strict";
const Constants = require ("../../../Constants");
const SiegeMastodonBase = require("../setM14/SiegeMastodon");

class SiegeMastodon extends SiegeMastodonBase {
  constructor (game) {
    super(game, "Siege Mastodon", "Magic 2011", "M11");
  }
}

module.exports = SiegeMastodon;
