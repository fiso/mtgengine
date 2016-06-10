"use strict";
const Constants = require ("../../../Constants");
const BileBlightBase = require("../setBNG/BileBlight");

class BileBlight extends BileBlightBase {
  constructor (game) {
    super(game, "Bile Blight", "Friday Night Magic", "pFNM");
  }
}

module.exports = BileBlight;
