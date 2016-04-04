"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasResearcher extends Card {
  constructor(game) {
    super(game, "Talas Researcher", "Masters Edition IV", "ME4");
  }
}

module.exports = TalasResearcher;
