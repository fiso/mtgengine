"use strict";
const Constants = require ("../../../Constants");
const BedlamRevelerBase = require("../setEMN/BedlamReveler");

class BedlamReveler extends BedlamRevelerBase {
  constructor (game) {
    super(game, "Bedlam Reveler", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = BedlamReveler;
