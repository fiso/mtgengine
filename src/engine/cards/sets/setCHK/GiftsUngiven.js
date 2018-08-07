"use strict";
const Constants = require ("../../../Constants");
const GiftsUngivenBase = require("../setSS1/GiftsUngiven");

class GiftsUngiven extends GiftsUngivenBase {
  constructor (game) {
    super(game, "Gifts Ungiven", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GiftsUngiven;
