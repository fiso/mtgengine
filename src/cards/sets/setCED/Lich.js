"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lich extends UnimplementedCard {
  constructor (game) {
    super(game, "Lich", "Collector's Edition", "CED");
  }
}

module.exports = Lich;
