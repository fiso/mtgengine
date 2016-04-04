"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DouseinGloomBase = require("../setFRF/DouseinGloom.js");

class DouseinGloom extends DouseinGloomBase {
  constructor(game) {
    super(game, "Douse in Gloom", "Guildpact", "GPT");
  }
}

module.exports = DouseinGloom;
