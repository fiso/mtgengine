"use strict";
const Constants = require ("../../../Constants");
const MegrimBase = require("../setDPA/Megrim");

class Megrim extends MegrimBase {
  constructor (game) {
    super(game, "Megrim", "Ninth Edition", "9ED");
  }
}

module.exports = Megrim;
