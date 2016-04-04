"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritualAsylum extends Card {
  constructor(game) {
    super(game, "Spiritual Asylum", "Nemesis", "NMS");
  }
}

module.exports = SpiritualAsylum;
