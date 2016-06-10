"use strict";
const Constants = require ("../../../Constants");
const DwarvenRuinsBase = require("../setBTD/DwarvenRuins");

class DwarvenRuins extends DwarvenRuinsBase {
  constructor (game) {
    super(game, "Dwarven Ruins", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DwarvenRuins;
