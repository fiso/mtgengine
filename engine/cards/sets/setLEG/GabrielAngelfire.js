"use strict";
const Constants = require ("../../../Constants");
const GabrielAngelfireBase = require("../setCHR/GabrielAngelfire");

class GabrielAngelfire extends GabrielAngelfireBase {
  constructor(game) {
    super(game, "Gabriel Angelfire", "Legends", "LEG");
  }
}

module.exports = GabrielAngelfire;
