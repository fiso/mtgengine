"use strict";
const Constants = require ("../../../Constants");
const KessigBase = require("../setPCA/Kessig");

class Kessig extends KessigBase {
  constructor (game) {
    super(game, "Kessig", "Planechase 2012", "PC2");
  }
}

module.exports = Kessig;
