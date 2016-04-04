"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishRanger extends Card {
  constructor(game) {
    super(game, "Elvish Ranger", "Alliances", "ALL");
  }
}

module.exports = ElvishRanger;
