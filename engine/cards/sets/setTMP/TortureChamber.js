"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TortureChamber extends Card {
  constructor(game) {
    super(game, "Torture Chamber", "Tempest", "TMP");
  }
}

module.exports = TortureChamber;
