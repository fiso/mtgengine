"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DjinnIlluminatusBase = require("../setDDJ/DjinnIlluminatus.js");

class DjinnIlluminatus extends DjinnIlluminatusBase {
  constructor(game) {
    super(game, "Djinn Illuminatus", "Guildpact", "GPT");
  }
}

module.exports = DjinnIlluminatus;
