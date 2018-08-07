"use strict";
const Constants = require ("../../../Constants");
const TorrentialGearhulkBase = require("../setKLD/TorrentialGearhulk");

class TorrentialGearhulk extends TorrentialGearhulkBase {
  constructor (game) {
    super(game, "Torrential Gearhulk", "Kaladesh Promos", "PKLD");
  }
}

module.exports = TorrentialGearhulk;
