"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishSpiritGuide extends Card {
  constructor(game) {
    super(game, "Elvish Spirit Guide", "Alliances", "ALL");
  }
}

module.exports = ElvishSpiritGuide;
