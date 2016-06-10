"use strict";
const Constants = require ("../../../Constants");
const RockBadgerBase = require("../setMMQ/RockBadger");

class RockBadger extends RockBadgerBase {
  constructor (game) {
    super(game, "Rock Badger", "Tenth Edition", "10E");
  }
}

module.exports = RockBadger;
