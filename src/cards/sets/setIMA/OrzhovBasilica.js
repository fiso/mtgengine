"use strict";
const Constants = require ("../../../Constants");
const OrzhovBasilicaBase = require("../setC18/OrzhovBasilica");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor (game) {
    super(game, "Orzhov Basilica", "Iconic Masters", "IMA");
  }
}

module.exports = OrzhovBasilica;
