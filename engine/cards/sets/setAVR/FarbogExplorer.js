"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarbogExplorer extends Card {
  constructor(game) {
    super(game, "Farbog Explorer", "Avacyn Restored", "AVR");
  }
}

module.exports = FarbogExplorer;
