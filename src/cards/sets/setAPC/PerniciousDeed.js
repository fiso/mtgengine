"use strict";
const Constants = require ("../../../Constants");
const PerniciousDeedBase = require("../setA25/PerniciousDeed");

class PerniciousDeed extends PerniciousDeedBase {
  constructor (game) {
    super(game, "Pernicious Deed", "Apocalypse", "APC");
  }
}

module.exports = PerniciousDeed;
