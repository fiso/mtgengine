"use strict";
const Constants = require ("../../../Constants");
const RishkarPeemaRenegadeBase = require("../setAER/RishkarPeemaRenegade");

class RishkarPeemaRenegade extends RishkarPeemaRenegadeBase {
  constructor (game) {
    super(game, "Rishkar, Peema Renegade", "Aether Revolt Promos", "PAER");
  }
}

module.exports = RishkarPeemaRenegade;
