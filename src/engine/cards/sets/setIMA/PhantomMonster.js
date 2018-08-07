"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Monster", "Iconic Masters", "IMA");
  }
}

module.exports = PhantomMonster;
