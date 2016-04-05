"use strict";
const Constants = require ("../../../Constants");
const OrzhovBasilicaBase = require("../setC13/OrzhovBasilica");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor(game) {
    super(game, "Orzhov Basilica", "Guildpact", "GPT");
  }
}

module.exports = OrzhovBasilica;
