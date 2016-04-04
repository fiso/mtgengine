"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderheadsBase = require("../setDDJ/Thunderheads.js");

class Thunderheads extends ThunderheadsBase {
  constructor(game) {
    super(game, "Thunderheads", "Guildpact", "GPT");
  }
}

module.exports = Thunderheads;
