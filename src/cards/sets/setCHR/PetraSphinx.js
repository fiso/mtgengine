"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PetraSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Petra Sphinx", "Chronicles", "CHR");
  }
}

module.exports = PetraSphinx;
