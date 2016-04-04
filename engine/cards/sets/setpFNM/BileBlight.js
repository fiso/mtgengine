"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BileBlightBase = require("../setBNG/BileBlight.js");

class BileBlight extends BileBlightBase {
  constructor(game) {
    super(game, "Bile Blight", "Friday Night Magic", "pFNM");
  }
}

module.exports = BileBlight;
