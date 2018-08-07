"use strict";
const Constants = require ("../../../Constants");
const DwarvenRuinsBase = require("../setME2/DwarvenRuins");

class DwarvenRuins extends DwarvenRuinsBase {
  constructor (game) {
    super(game, "Dwarven Ruins", "Beatdown Box Set", "BTD");
  }
}

module.exports = DwarvenRuins;
