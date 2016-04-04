"use strict";
const Constants = require ("../../../Constants");
const SiegeMastodonBase = require("../setM10/SiegeMastodon");

class SiegeMastodon extends SiegeMastodonBase {
  constructor(game) {
    super(game, "Siege Mastodon", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SiegeMastodon;
