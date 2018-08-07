"use strict";
const Constants = require ("../../../Constants");
const DwarvenRuinsBase = require("../setME2/DwarvenRuins");

class DwarvenRuins extends DwarvenRuinsBase {
  constructor (game) {
    super(game, "Dwarven Ruins", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenRuins;
