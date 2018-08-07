"use strict";
const Constants = require ("../../../Constants");
const NephaliaBase = require("../setPCA/Nephalia");

class Nephalia extends NephaliaBase {
  constructor (game) {
    super(game, "Nephalia", "Planechase 2012", "PC2");
  }
}

module.exports = Nephalia;
