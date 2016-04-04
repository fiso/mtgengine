"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SiegeMastodonBase = require("../setM10/SiegeMastodon.js");

class SiegeMastodon extends SiegeMastodonBase {
  constructor(game) {
    super(game, "Siege Mastodon", "Magic 2011", "M11");
  }
}

module.exports = SiegeMastodon;
