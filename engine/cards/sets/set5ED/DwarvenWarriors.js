"use strict";
const Constants = require ("../../../Constants");
const DwarvenWarriorsBase = require("../setCED/DwarvenWarriors");

class DwarvenWarriors extends DwarvenWarriorsBase {
  constructor(game) {
    super(game, "Dwarven Warriors", "Fifth Edition", "5ED");
  }
}

module.exports = DwarvenWarriors;
