"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrognosticSphinx extends Card {
  constructor(game) {
    super(game, "Prognostic Sphinx", "Clash Pack", "CPK");
  }
}

module.exports = PrognosticSphinx;
