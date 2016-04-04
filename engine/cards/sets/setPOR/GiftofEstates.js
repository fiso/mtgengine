"use strict";
const Constants = require ("../../../Constants");
const GiftofEstatesBase = require("../setC14/GiftofEstates");

class GiftofEstates extends GiftofEstatesBase {
  constructor(game) {
    super(game, "Gift of Estates", "Portal", "POR");
  }
}

module.exports = GiftofEstates;
