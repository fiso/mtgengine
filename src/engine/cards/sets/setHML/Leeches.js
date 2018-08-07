"use strict";
const Constants = require ("../../../Constants");
const LeechesBase = require("../setME4/Leeches");

class Leeches extends LeechesBase {
  constructor (game) {
    super(game, "Leeches", "Homelands", "HML");
  }
}

module.exports = Leeches;
