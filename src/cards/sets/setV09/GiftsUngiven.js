"use strict";
const Constants = require ("../../../Constants");
const GiftsUngivenBase = require("../setCHK/GiftsUngiven");

class GiftsUngiven extends GiftsUngivenBase {
  constructor (game) {
    super(game, "Gifts Ungiven", "From the Vault: Exiled", "V09");
  }
}

module.exports = GiftsUngiven;
