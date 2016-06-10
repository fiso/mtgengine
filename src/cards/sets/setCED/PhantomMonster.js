"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Monster", "Collector's Edition", "CED");
  }
}

module.exports = PhantomMonster;
