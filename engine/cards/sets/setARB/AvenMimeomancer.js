"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenMimeomancer extends Card {
  constructor(game) {
    super(game, "Aven Mimeomancer", "Alara Reborn", "ARB");
  }
}

module.exports = AvenMimeomancer;
