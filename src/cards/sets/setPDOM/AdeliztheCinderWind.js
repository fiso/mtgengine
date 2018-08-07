"use strict";
const Constants = require ("../../../Constants");
const AdeliztheCinderWindBase = require("../setDOM/AdeliztheCinderWind");

class AdeliztheCinderWind extends AdeliztheCinderWindBase {
  constructor (game) {
    super(game, "Adeliz, the Cinder Wind", "Dominaria Promos", "PDOM");
  }
}

module.exports = AdeliztheCinderWind;
