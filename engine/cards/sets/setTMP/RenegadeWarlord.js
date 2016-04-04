"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenegadeWarlord extends Card {
  constructor(game) {
    super(game, "Renegade Warlord", "Tempest", "TMP");
  }
}

module.exports = RenegadeWarlord;
