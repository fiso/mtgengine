"use strict";
const Constants = require ("../../../Constants");
const WaxmaneBakuBase = require("../setBOK/WaxmaneBaku");

class WaxmaneBaku extends WaxmaneBakuBase {
  constructor(game) {
    super(game, "Waxmane Baku", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WaxmaneBaku;
