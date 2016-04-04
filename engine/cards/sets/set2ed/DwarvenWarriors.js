"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenWarriorsBase = require("../setCED/DwarvenWarriors.js");

class DwarvenWarriors extends DwarvenWarriorsBase {
  constructor(game) {
    super(game, "Dwarven Warriors", "Unlimited Edition", "2ED");
  }
}

module.exports = DwarvenWarriors;
