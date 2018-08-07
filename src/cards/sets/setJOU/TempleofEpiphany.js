"use strict";
const Constants = require ("../../../Constants");
const TempleofEpiphanyBase = require("../setDDU/TempleofEpiphany");

class TempleofEpiphany extends TempleofEpiphanyBase {
  constructor (game) {
    super(game, "Temple of Epiphany", "Journey into Nyx", "JOU");
  }
}

module.exports = TempleofEpiphany;
