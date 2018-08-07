"use strict";
const Constants = require ("../../../Constants");
const SomberwaldVigilanteBase = require("../setDDL/SomberwaldVigilante");

class SomberwaldVigilante extends SomberwaldVigilanteBase {
  constructor (game) {
    super(game, "Somberwald Vigilante", "Avacyn Restored", "AVR");
  }
}

module.exports = SomberwaldVigilante;
