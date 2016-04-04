"use strict";
const Constants = require ("../../../Constants");
const PerniciousDeedBase = require("../setAPC/PerniciousDeed");

class PerniciousDeed extends PerniciousDeedBase {
  constructor(game) {
    super(game, "Pernicious Deed", "Judge Gift Program", "pJGP");
  }
}

module.exports = PerniciousDeed;
