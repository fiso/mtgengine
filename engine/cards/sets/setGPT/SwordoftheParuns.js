"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordoftheParunsBase = require("../setC13/SwordoftheParuns.js");

class SwordoftheParuns extends SwordoftheParunsBase {
  constructor(game) {
    super(game, "Sword of the Paruns", "Guildpact", "GPT");
  }
}

module.exports = SwordoftheParuns;
