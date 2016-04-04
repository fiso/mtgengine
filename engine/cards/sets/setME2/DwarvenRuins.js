"use strict";
const Constants = require ("../../../Constants");
const DwarvenRuinsBase = require("../setBTD/DwarvenRuins");

class DwarvenRuins extends DwarvenRuinsBase {
  constructor(game) {
    super(game, "Dwarven Ruins", "Masters Edition II", "ME2");
  }
}

module.exports = DwarvenRuins;
