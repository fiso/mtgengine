"use strict";
const Constants = require ("../../../Constants");
const GoldmeadowBase = require("../setPCA/Goldmeadow");

class Goldmeadow extends GoldmeadowBase {
  constructor (game) {
    super(game, "Goldmeadow", "Planechase", "HOP");
  }
}

module.exports = Goldmeadow;
