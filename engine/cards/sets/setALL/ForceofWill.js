"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForceofWill extends Card {
  constructor(game) {
    super(game, "Force of Will", "Alliances", "ALL");
  }
}

module.exports = ForceofWill;
