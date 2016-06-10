"use strict";
const Constants = require ("../../../Constants");
const MegrimBase = require("../setDPA/Megrim");

class Megrim extends MegrimBase {
  constructor (game) {
    super(game, "Megrim", "Tenth Edition", "10E");
  }
}

module.exports = Megrim;
