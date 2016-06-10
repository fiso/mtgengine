"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenWarriors extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Warriors", "Collector's Edition", "CED");
  }
}

module.exports = DwarvenWarriors;
