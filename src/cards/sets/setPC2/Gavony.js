"use strict";
const Constants = require ("../../../Constants");
const GavonyBase = require("../setPCA/Gavony");

class Gavony extends GavonyBase {
  constructor (game) {
    super(game, "Gavony", "Planechase 2012", "PC2");
  }
}

module.exports = Gavony;
