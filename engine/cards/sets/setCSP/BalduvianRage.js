"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianRage extends Card {
  constructor(game) {
    super(game, "Balduvian Rage", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianRage;
