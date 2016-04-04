"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerastodonBase = require("../setC14/Terastodon.js");

class Terastodon extends TerastodonBase {
  constructor(game) {
    super(game, "Terastodon", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Terastodon;
