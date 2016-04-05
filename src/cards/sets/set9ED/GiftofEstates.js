"use strict";
const Constants = require ("../../../Constants");
const GiftofEstatesBase = require("../setC14/GiftofEstates");

class GiftofEstates extends GiftofEstatesBase {
  constructor(game) {
    super(game, "Gift of Estates", "Ninth Edition", "9ED");
  }
}

module.exports = GiftofEstates;
