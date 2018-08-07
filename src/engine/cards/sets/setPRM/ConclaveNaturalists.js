"use strict";
const Constants = require ("../../../Constants");
const ConclaveNaturalistsBase = require("../setPORI/ConclaveNaturalists");

class ConclaveNaturalists extends ConclaveNaturalistsBase {
  constructor (game) {
    super(game, "Conclave Naturalists", "Magic Online Promos", "PRM");
  }
}

module.exports = ConclaveNaturalists;
