"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrognosticSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Prognostic Sphinx", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = PrognosticSphinx;
