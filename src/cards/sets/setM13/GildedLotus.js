"use strict";
const Constants = require ("../../../Constants");
const GildedLotusBase = require("../setV13/GildedLotus");

class GildedLotus extends GildedLotusBase {
  constructor (game) {
    super(game, "Gilded Lotus", "Magic 2013", "M13");
  }
}

module.exports = GildedLotus;
