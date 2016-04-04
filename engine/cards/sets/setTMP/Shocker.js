"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shocker extends Card {
  constructor(game) {
    super(game, "Shocker", "Tempest", "TMP");
  }
}

module.exports = Shocker;
