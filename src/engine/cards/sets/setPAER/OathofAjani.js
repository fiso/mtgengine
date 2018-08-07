"use strict";
const Constants = require ("../../../Constants");
const OathofAjaniBase = require("../setAER/OathofAjani");

class OathofAjani extends OathofAjaniBase {
  constructor (game) {
    super(game, "Oath of Ajani", "Aether Revolt Promos", "PAER");
  }
}

module.exports = OathofAjani;
