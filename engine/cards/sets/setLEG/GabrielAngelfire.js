"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GabrielAngelfireBase = require("../setCHR/GabrielAngelfire.js");

class GabrielAngelfire extends GabrielAngelfireBase {
  constructor(game) {
    super(game, "Gabriel Angelfire", "Legends", "LEG");
  }
}

module.exports = GabrielAngelfire;
