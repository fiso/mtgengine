"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KederektParasite extends UnimplementedCard {
  constructor (game) {
    super(game, "Kederekt Parasite", "Conflux", "CON");
  }
}

module.exports = KederektParasite;
