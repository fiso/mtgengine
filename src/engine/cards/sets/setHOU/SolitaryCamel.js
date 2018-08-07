"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolitaryCamel extends UnimplementedCard {
  constructor (game) {
    super(game, "Solitary Camel", "Hour of Devastation", "HOU");
  }
}

module.exports = SolitaryCamel;
