"use strict";
const Constants = require ("../../../Constants");
const UrgetoFeedBase = require("../setE02/UrgetoFeed");

class UrgetoFeed extends UrgetoFeedBase {
  constructor (game) {
    super(game, "Urge to Feed", "Worldwake", "WWK");
  }
}

module.exports = UrgetoFeed;
