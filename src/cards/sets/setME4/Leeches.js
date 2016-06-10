"use strict";
const Constants = require ("../../../Constants");
const LeechesBase = require("../setHML/Leeches");

class Leeches extends LeechesBase {
  constructor (game) {
    super(game, "Leeches", "Masters Edition IV", "ME4");
  }
}

module.exports = Leeches;
