"use strict";
const Constants = require ("../../../Constants");
const DwarvenWarriorsBase = require("../setCED/DwarvenWarriors");

class DwarvenWarriors extends DwarvenWarriorsBase {
  constructor (game) {
    super(game, "Dwarven Warriors", "Fourth Edition", "4ED");
  }
}

module.exports = DwarvenWarriors;
