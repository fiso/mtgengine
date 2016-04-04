"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishBard extends Card {
  constructor(game) {
    super(game, "Elvish Bard", "Alliances", "ALL");
  }
}

module.exports = ElvishBard;
