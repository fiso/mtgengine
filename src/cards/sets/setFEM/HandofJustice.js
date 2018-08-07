"use strict";
const Constants = require ("../../../Constants");
const HandofJusticeBase = require("../setMED/HandofJustice");

class HandofJustice extends HandofJusticeBase {
  constructor (game) {
    super(game, "Hand of Justice", "Fallen Empires", "FEM");
  }
}

module.exports = HandofJustice;
