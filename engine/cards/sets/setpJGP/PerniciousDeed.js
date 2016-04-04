"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PerniciousDeedBase = require("../setAPC/PerniciousDeed.js");

class PerniciousDeed extends PerniciousDeedBase {
  constructor(game) {
    super(game, "Pernicious Deed", "Judge Gift Program", "pJGP");
  }
}

module.exports = PerniciousDeed;
