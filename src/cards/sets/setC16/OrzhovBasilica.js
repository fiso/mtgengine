"use strict";
const Constants = require ("../../../Constants");
const OrzhovBasilicaBase = require("../setC18/OrzhovBasilica");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor (game) {
    super(game, "Orzhov Basilica", "Commander 2016", "C16");
  }
}

module.exports = OrzhovBasilica;
