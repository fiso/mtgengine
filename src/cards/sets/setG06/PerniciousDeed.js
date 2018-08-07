"use strict";
const Constants = require ("../../../Constants");
const PerniciousDeedBase = require("../setA25/PerniciousDeed");

class PerniciousDeed extends PerniciousDeedBase {
  constructor (game) {
    super(game, "Pernicious Deed", "Judge Gift Cards 2006", "G06");
  }
}

module.exports = PerniciousDeed;
