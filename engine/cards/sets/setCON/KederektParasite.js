"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KederektParasite extends Card {
  constructor(game) {
    super(game, "Kederekt Parasite", "Conflux", "CON");
  }
}

module.exports = KederektParasite;
