"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ColdStorage extends Card {
  constructor(game) {
    super(game, "Cold Storage", "Tempest", "TMP");
  }
}

module.exports = ColdStorage;
