"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OminousSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Ominous Sphinx", "Hour of Devastation", "HOU");
  }
}

module.exports = OminousSphinx;
