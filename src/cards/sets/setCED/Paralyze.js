"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Paralyze extends UnimplementedCard {
  constructor (game) {
    super(game, "Paralyze", "Collector's Edition", "CED");
  }
}

module.exports = Paralyze;
