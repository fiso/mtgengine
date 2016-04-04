"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormentorsTrident extends Card {
  constructor(game) {
    super(game, "Tormentor's Trident", "Avacyn Restored", "AVR");
  }
}

module.exports = TormentorsTrident;
