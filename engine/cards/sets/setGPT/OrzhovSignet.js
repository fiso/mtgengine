"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrzhovSignetBase = require("../setC15/OrzhovSignet.js");

class OrzhovSignet extends OrzhovSignetBase {
  constructor(game) {
    super(game, "Orzhov Signet", "Guildpact", "GPT");
  }
}

module.exports = OrzhovSignet;
