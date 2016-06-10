"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plateau extends UnimplementedCard {
  constructor (game) {
    super(game, "Plateau", "Collector's Edition", "CED");
  }
}

module.exports = Plateau;
