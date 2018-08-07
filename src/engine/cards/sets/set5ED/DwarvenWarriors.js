"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenWarriors extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Warriors", "Fifth Edition", "5ED");
  }
}

module.exports = DwarvenWarriors;
