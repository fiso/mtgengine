"use strict";
const Constants = require ("../../../Constants");
const GildedLotusBase = require("../setDOM/GildedLotus");

class GildedLotus extends GildedLotusBase {
  constructor (game) {
    super(game, "Gilded Lotus", "Dominaria Promos", "PDOM");
  }
}

module.exports = GildedLotus;
