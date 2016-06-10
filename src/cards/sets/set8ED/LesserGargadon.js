"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LesserGargadon extends UnimplementedCard {
  constructor (game) {
    super(game, "Lesser Gargadon", "Eighth Edition", "8ED");
  }
}

module.exports = LesserGargadon;
