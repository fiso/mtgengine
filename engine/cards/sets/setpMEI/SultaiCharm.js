"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SultaiCharmBase = require("../setKTK/SultaiCharm.js");

class SultaiCharm extends SultaiCharmBase {
  constructor(game) {
    super(game, "Sultai Charm", "Media Inserts", "pMEI");
  }
}

module.exports = SultaiCharm;
