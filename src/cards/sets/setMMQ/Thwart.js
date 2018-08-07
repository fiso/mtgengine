"use strict";
const Constants = require ("../../../Constants");
const ThwartBase = require("../setWC01/Thwart");

class Thwart extends ThwartBase {
  constructor (game) {
    super(game, "Thwart", "Mercadian Masques", "MMQ");
  }
}

module.exports = Thwart;
