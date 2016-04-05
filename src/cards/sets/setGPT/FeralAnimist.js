"use strict";
const Constants = require ("../../../Constants");
const FeralAnimistBase = require("../setDGM/FeralAnimist");

class FeralAnimist extends FeralAnimistBase {
  constructor(game) {
    super(game, "Feral Animist", "Guildpact", "GPT");
  }
}

module.exports = FeralAnimist;
