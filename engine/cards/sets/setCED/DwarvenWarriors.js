"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenWarriors extends Card {
  constructor(game) {
    super(game, "Dwarven Warriors", "Collector's Edition", "CED");
  }
}

module.exports = DwarvenWarriors;
