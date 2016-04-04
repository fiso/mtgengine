"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloomTender extends Card {
  constructor(game) {
    super(game, "Bloom Tender", "Eventide", "EVE");
  }
}

module.exports = BloomTender;
