"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormscapeMaster extends Card {
  constructor(game) {
    super(game, "Stormscape Master", "Invasion", "INV");
  }
}

module.exports = StormscapeMaster;
