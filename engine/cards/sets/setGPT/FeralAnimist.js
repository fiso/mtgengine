"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeralAnimistBase = require("../setDGM/FeralAnimist.js");

class FeralAnimist extends FeralAnimistBase {
  constructor(game) {
    super(game, "Feral Animist", "Guildpact", "GPT");
  }
}

module.exports = FeralAnimist;
