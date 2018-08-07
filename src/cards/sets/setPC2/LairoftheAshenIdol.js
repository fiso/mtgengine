"use strict";
const Constants = require ("../../../Constants");
const LairoftheAshenIdolBase = require("../setPCA/LairoftheAshenIdol");

class LairoftheAshenIdol extends LairoftheAshenIdolBase {
  constructor (game) {
    super(game, "Lair of the Ashen Idol", "Planechase 2012", "PC2");
  }
}

module.exports = LairoftheAshenIdol;
