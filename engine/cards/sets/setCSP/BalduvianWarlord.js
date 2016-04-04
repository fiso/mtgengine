"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianWarlord extends Card {
  constructor(game) {
    super(game, "Balduvian Warlord", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianWarlord;
