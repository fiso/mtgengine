"use strict";
const Constants = require ("../../../Constants");
const MegrimBase = require("../setDPA/Megrim");

class Megrim extends MegrimBase {
  constructor (game) {
    super(game, "Megrim", "Eighth Edition", "8ED");
  }
}

module.exports = Megrim;
