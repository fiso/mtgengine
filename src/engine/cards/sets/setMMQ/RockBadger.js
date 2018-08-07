"use strict";
const Constants = require ("../../../Constants");
const RockBadgerBase = require("../set10E/RockBadger");

class RockBadger extends RockBadgerBase {
  constructor (game) {
    super(game, "Rock Badger", "Mercadian Masques", "MMQ");
  }
}

module.exports = RockBadger;
