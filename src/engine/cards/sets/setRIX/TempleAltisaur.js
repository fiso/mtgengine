"use strict";
const Constants = require ("../../../Constants");
const TempleAltisaurBase = require("../setPRIX/TempleAltisaur");

class TempleAltisaur extends TempleAltisaurBase {
  constructor (game) {
    super(game, "Temple Altisaur", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TempleAltisaur;
