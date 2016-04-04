"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GelectrodeBase = require("../setDDJ/Gelectrode.js");

class Gelectrode extends GelectrodeBase {
  constructor(game) {
    super(game, "Gelectrode", "Guildpact", "GPT");
  }
}

module.exports = Gelectrode;
