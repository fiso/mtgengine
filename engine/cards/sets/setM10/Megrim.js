"use strict";
const Constants = require ("../../../Constants");
const MegrimBase = require("../setDPA/Megrim");

class Megrim extends MegrimBase {
  constructor(game) {
    super(game, "Megrim", "Magic 2010", "M10");
  }
}

module.exports = Megrim;
