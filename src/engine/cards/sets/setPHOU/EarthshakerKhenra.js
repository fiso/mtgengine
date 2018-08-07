"use strict";
const Constants = require ("../../../Constants");
const EarthshakerKhenraBase = require("../setHOU/EarthshakerKhenra");

class EarthshakerKhenra extends EarthshakerKhenraBase {
  constructor (game) {
    super(game, "Earthshaker Khenra", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = EarthshakerKhenra;
