"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerastodonBase = require("../setC14/Terastodon.js");

class Terastodon extends TerastodonBase {
  constructor(game) {
    super(game, "Terastodon", "Media Inserts", "pMEI");
  }
}

module.exports = Terastodon;
