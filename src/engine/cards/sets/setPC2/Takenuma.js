"use strict";
const Constants = require ("../../../Constants");
const TakenumaBase = require("../setPCA/Takenuma");

class Takenuma extends TakenumaBase {
  constructor (game) {
    super(game, "Takenuma", "Planechase 2012", "PC2");
  }
}

module.exports = Takenuma;
