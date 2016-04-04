"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaxmaneBakuBase = require("../setBOK/WaxmaneBaku.js");

class WaxmaneBaku extends WaxmaneBakuBase {
  constructor(game) {
    super(game, "Waxmane Baku", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WaxmaneBaku;
