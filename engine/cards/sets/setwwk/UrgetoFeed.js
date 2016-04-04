"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrgetoFeedBase = require("../setDDK/UrgetoFeed.js");

class UrgetoFeed extends UrgetoFeedBase {
  constructor(game) {
    super(game, "Urge to Feed", "Worldwake", "WWK");
  }
}

module.exports = UrgetoFeed;
