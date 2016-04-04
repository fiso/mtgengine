"use strict";
const Constants = require ("../../../Constants");
const OrzhovBasilicaBase = require("../setC13/OrzhovBasilica");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor(game) {
    super(game, "Orzhov Basilica", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = OrzhovBasilica;
