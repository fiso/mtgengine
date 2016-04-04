"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NicolBolasBase = require("../setCHR/NicolBolas.js");

class NicolBolas extends NicolBolasBase {
  constructor(game) {
    super(game, "Nicol Bolas", "Masters Edition III", "ME3");
  }
}

module.exports = NicolBolas;
