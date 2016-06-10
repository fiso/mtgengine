"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedElementalBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Red Elemental Blast", "Collector's Edition", "CED");
  }
}

module.exports = RedElementalBlast;
