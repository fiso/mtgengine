"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LochKorrigan extends Card {
  constructor(game) {
    super(game, "Loch Korrigan", "Shadowmoor", "SHM");
  }
}

module.exports = LochKorrigan;
