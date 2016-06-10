"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Obliterate extends UnimplementedCard {
  constructor (game) {
    super(game, "Obliterate", "Eighth Edition", "8ED");
  }
}

module.exports = Obliterate;
