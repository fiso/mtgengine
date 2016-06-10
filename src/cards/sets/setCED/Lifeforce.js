"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifeforce extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifeforce", "Collector's Edition", "CED");
  }
}

module.exports = Lifeforce;
