"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromokasGift extends Card {
  constructor(game) {
    super(game, "Dromoka's Gift", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokasGift;
