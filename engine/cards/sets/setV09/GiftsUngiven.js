"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiftsUngivenBase = require("../setCHK/GiftsUngiven.js");

class GiftsUngiven extends GiftsUngivenBase {
  constructor(game) {
    super(game, "Gifts Ungiven", "From the Vault: Exiled", "V09");
  }
}

module.exports = GiftsUngiven;
