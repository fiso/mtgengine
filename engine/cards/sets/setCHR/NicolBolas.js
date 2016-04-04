"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NicolBolas extends Card {
  constructor(game) {
    super(game, "Nicol Bolas", "Chronicles", "CHR");
  }
}

module.exports = NicolBolas;
