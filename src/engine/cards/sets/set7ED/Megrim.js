"use strict";
const Constants = require ("../../../Constants");
const MegrimBase = require("../setDPA/Megrim");

class Megrim extends MegrimBase {
  constructor (game) {
    super(game, "Megrim", "Seventh Edition", "7ED");
  }
}

module.exports = Megrim;
