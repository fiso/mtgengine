"use strict";
const Constants = require ("../../../Constants");
const HerosDownfallBase = require("../setCPK/HerosDownfall");

class HerosDownfall extends HerosDownfallBase {
  constructor(game) {
    super(game, "Hero's Downfall", "Theros", "THS");
  }
}

module.exports = HerosDownfall;
