"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MossMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Moss Monster", "Eighth Edition", "8ED");
  }
}

module.exports = MossMonster;
