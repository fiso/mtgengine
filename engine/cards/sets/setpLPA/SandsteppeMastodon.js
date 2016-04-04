"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SandsteppeMastodonBase = require("../setFRF/SandsteppeMastodon.js");

class SandsteppeMastodon extends SandsteppeMastodonBase {
  constructor(game) {
    super(game, "Sandsteppe Mastodon", "Launch Parties", "pLPA");
  }
}

module.exports = SandsteppeMastodon;
