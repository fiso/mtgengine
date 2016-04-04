"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrzhovBasilicaBase = require("../setC13/OrzhovBasilica.js");

class OrzhovBasilica extends OrzhovBasilicaBase {
  constructor(game) {
    super(game, "Orzhov Basilica", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrzhovBasilica;
