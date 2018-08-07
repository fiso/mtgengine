"use strict";
const Constants = require ("../../../Constants");
const SramSeniorEdificerBase = require("../setAER/SramSeniorEdificer");

class SramSeniorEdificer extends SramSeniorEdificerBase {
  constructor (game) {
    super(game, "Sram, Senior Edificer", "Aether Revolt Promos", "PAER");
  }
}

module.exports = SramSeniorEdificer;
