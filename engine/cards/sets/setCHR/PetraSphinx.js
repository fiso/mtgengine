"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PetraSphinx extends Card {
  constructor(game) {
    super(game, "Petra Sphinx", "Chronicles", "CHR");
  }
}

module.exports = PetraSphinx;
