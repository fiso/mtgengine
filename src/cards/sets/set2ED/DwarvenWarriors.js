"use strict";
const Constants = require ("../../../Constants");
const DwarvenWarriorsBase = require("../setCED/DwarvenWarriors");

class DwarvenWarriors extends DwarvenWarriorsBase {
  constructor (game) {
    super(game, "Dwarven Warriors", "Unlimited Edition", "2ED");
  }
}

module.exports = DwarvenWarriors;
