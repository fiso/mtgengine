"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GildedLotusBase = require("../setV13/GildedLotus.js");

class GildedLotus extends GildedLotusBase {
  constructor(game) {
    super(game, "Gilded Lotus", "Magic 2013", "M13");
  }
}

module.exports = GildedLotus;
