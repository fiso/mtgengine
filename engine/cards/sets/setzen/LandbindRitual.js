"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandbindRitual extends Card {
  constructor(game) {
    super(game, "Landbind Ritual", "Zendikar", "ZEN");
  }
}

module.exports = LandbindRitual;
