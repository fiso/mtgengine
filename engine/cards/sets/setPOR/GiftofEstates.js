"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiftofEstatesBase = require("../setC14/GiftofEstates.js");

class GiftofEstates extends GiftofEstatesBase {
  constructor(game) {
    super(game, "Gift of Estates", "Portal", "POR");
  }
}

module.exports = GiftofEstates;
