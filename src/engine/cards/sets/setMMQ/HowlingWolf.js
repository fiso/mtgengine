"use strict";
const Constants = require ("../../../Constants");
const HowlingWolfBase = require("../setCNS/HowlingWolf");

class HowlingWolf extends HowlingWolfBase {
  constructor (game) {
    super(game, "Howling Wolf", "Mercadian Masques", "MMQ");
  }
}

module.exports = HowlingWolf;
