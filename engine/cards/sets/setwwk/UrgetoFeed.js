"use strict";
const Constants = require ("../../../Constants");
const UrgetoFeedBase = require("../setDDK/UrgetoFeed");

class UrgetoFeed extends UrgetoFeedBase {
  constructor(game) {
    super(game, "Urge to Feed", "Worldwake", "WWK");
  }
}

module.exports = UrgetoFeed;
