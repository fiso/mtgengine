"use strict";
const Constants = require ("../../../Constants");
const OrzhovBasilicaBase = require("../setC13/OrzhovBasilica");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor(game) {
    super(game, "Orzhov Basilica", "Commander 2015", "C15");
  }
}

module.exports = OrzhovBasilica;
