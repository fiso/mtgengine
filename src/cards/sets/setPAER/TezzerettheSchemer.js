"use strict";
const Constants = require ("../../../Constants");
const TezzerettheSchemerBase = require("../setAER/TezzerettheSchemer");

class TezzerettheSchemer extends TezzerettheSchemerBase {
  constructor (game) {
    super(game, "Tezzeret the Schemer", "Aether Revolt Promos", "PAER");
  }
}

module.exports = TezzerettheSchemer;
