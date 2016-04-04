"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WasteAway extends Card {
  constructor(game) {
    super(game, "Waste Away", "Torment", "TOR");
  }
}

module.exports = WasteAway;
